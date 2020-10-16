import { UsuarioPapel } from '../database/models'

export default {

    add: (req, res, next) => {
        try {
            UsuarioPapel.create(req.body).then(response => {
                res.status(201).json({ success: true, papel: response })
            }).catch(error => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram inseridos.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    update: (req, res, next) => {
        try {
            UsuarioPapel.findOne({ where: { id: req.params.id } }).then(papel => {
                return papel.update(req.body).then(response => {
                    res.status(200).json({ success: true, papel: response })
                })
            }).catch(error => {
                res.status(400).json({
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram atualizados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    list: (req, res, next) => {
        try {
            UsuarioPapel.findAll().then((response) => {
                res.status(200).json({ success: true, papeis: response })
            }).catch((error) => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    listAtivos: (req, res, next) => {
        try {
            UsuarioPapel.findAll({ where: { ativo: true } }).then((response) => {
                res.status(200).json({ success: true, papeis: response })
            }).catch((error) => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram recuperados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    findById: (req, res, next) => {
        try {
            UsuarioPapel.findOne({ where: { id: req.params.id } }).then((response) => {
                res.status(200).json({ success: true, papel: response })
            }).catch((error) => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto o dado era recuperado.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    activate: (req, res, next) => {
        try {
            UsuarioPapel.findOne({ where: { id: req.params.id } }).then(papel => {
                return papel.update({ ativo: true }).then(response => {
                    res.status(200).json({ success: true, papel: response })
                })
            }).catch(error => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram atualizados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    },

    deactivate: (req, res, next) => {
        try {
            UsuarioPapel.findOne({ where: { id: req.params.id } }).then(papel => {
                return papel.update({ ativo: false }).then(response => {
                    res.status(200).json({ success: true, papel: response })
                })
            }).catch(error => {
                res.status(400).json({
                    error: error,
                    success: false,
                    message: 'Ocorreu um erro enquanto os dados eram atualizados.'
                })
            })
        } catch (error) {
            res.status(500).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro desconhecido com o sistema.'
            })
            next(error)
        }
    }

}