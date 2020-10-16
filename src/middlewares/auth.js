import tokenService from '../services/tokenService'

export default {

    verifyUsuario: async (req, res, next) => {
        if (req.headers.token) {
            const response = await tokenService.decode(req.headers.token)
            if (response.papel.descricao === 'super' || response.papel.descricao === 'admin' || response.papel.descricao === 'usuario') {
                next()
            } else {
                res.status(403).send({ 
                    success: false,
                    message: 'O seu acesso a essa URL não é permitida.' 
                })
            }
        } else {
            res.status(401).send({ 
                success: false,
                message: 'Você não possui um token de acesso.' 
            })
        }
    },

    verifyAdmin: async (req, res, next) => {
        if (req.headers.token) {
            const response = await tokenService.decode(req.headers.token)
            if (response.papel.descricao  === 'super' || response.papel.descricao === 'admin') {
                next()
            } else {
                res.status(403).send({ success: false,
                    message: 'O seu acesso a essa URL não é permitida.' 
                })
            }
        } else {
            res.status(401).send({ 
                success: false,
                message: 'Você não possui um token de acesso.' 
            })
        }
    },

    verifySuper: async (req, res, next) => {
        if (req.headers.token) {
            const response = await tokenService.decode(req.headers.token)
            if (response.papel.descricao === 'super') {
                next()
            } else {
                res.status(403).send({ 
                    success: false,
                    message: 'O seu acesso a essa URL não é permitida.' 
                })
            }
        } else {
            res.status(401).send({ 
                success: false,
                message: 'Você não possui um token de acesso.' 
            })
        }
    }

}