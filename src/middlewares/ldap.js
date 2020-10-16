import ldap from 'ldapjs'
import { Usuario, Setor, UsuarioPapel } from '../database/models'


const dominio = '@jfpb.jus.br'

const getUser = (req, res, next) => {
    Usuario.findOne({
        where: { usuario: req.body.username },
        include: [{
            model: UsuarioPapel,
            as: 'papel'
        }, {
            model: Setor,
            as: 'setor',
        }]
    }).then(usuario => {
        if (usuario === undefined) {
            return res.status(400).send({ message: 'O usuário não está cadastrado no sistema.' })
        } else {
            if(!usuario.ativo){
                return res.status(401).send({ message: 'O usuário está inativo no sistema.' })
            }
            req.body.usuario = usuario
            next()
        }
    }).catch(error => {
        return res.status(400).send({ 
            error: error,
            success: false,
            message: 'Ocorreu um erro enquanto os dados eram recuperados.'
        })
    })
}

const autenticarLdap = (req, res, next) => {
    const client = ldap.createClient({
        url: 'ldap://adjpa00.jfpb.jus.br:389'
    })

    client.bind(`${req.body.username}` + dominio, req.body.senha, function (err) {
        if (err) {
            return res.status(400).send({ message: 'O usuário não está cadastrado no LDAP.' })
        } else {
            client.unbind()
            next()
        }
    })
}

export { getUser, autenticarLdap }