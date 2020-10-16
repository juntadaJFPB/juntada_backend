import jwt from 'jsonwebtoken'
import { Usuario, Setor, UsuarioPapel } from '../database/models'

async function checkToken(token) {
    try {
        const { id } = jwt.decode(token)
        return await Usuario.findOne({
            where: { id },
            include: [{
                model: UsuarioPapel,
                as: 'papel'
            }, {
                model: Setor,
                as: 'setor',
            }]
        }).then(response => {
            if (response) {
                const { id, papel: { descricao }, usuario } = response
                const tokenKey = process.env.TOKEN_KEY || 'tokenKey'
                const token = jwt.sign({ id, papel: descricao, username: usuario }, tokenKey, { expiresIn: '1d' })
                return { token, papel: response.papel }
            } else {
                return false
            }
        })
    } catch (error) {
        return false
    }
}

export default {

    encode: (id, papel, username) => {
        const tokenKey = process.env.TOKEN_KEY || 'tokenKey'
        return jwt.sign({ id, papel, username }, tokenKey, { expiresIn: '1d' })
    },

    verifyToken: async (token) => await checkToken(token),

    decode: async (token) => {
        try {
            const tokenKey = process.env.TOKEN_KEY || 'tokenKey'
            const { id } = jwt.verify(token, tokenKey)
            return await Usuario.findOne({
                where: { id },
                include: [{
                    model: UsuarioPapel,
                    as: 'papel'
                }, {
                    model: Setor,
                    as: 'setor',
                }]
            })
        } catch (error) {
            return await checkToken(token)
        }
    }
}