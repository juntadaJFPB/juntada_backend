import { Op } from 'sequelize'
import { Setor } from '../database/models'

export default {

    add: (req, res, next) => {
        try {
            Setor.create(req.body).then(response => {
                res.status(201).json({ success: true, setor: response })
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
            Setor.findOne({ where: { id: req.params.id } }).then(setor => {
                return setor.update(req.body).then(response => {
                    res.status(200).json({ success: true, setor: response })
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

    list: (req, res, next) => {
        try {
            Setor.findAll().then((response) => {
                res.status(200).json({ success: true, setores: response })
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
            Setor.findOne({ where: { id: req.params.id } }).then((response) => {
                res.status(200).json({ success: true, setor: response })
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
            Setor.findOne({ where: { id: req.params.id } }).then(setor => {
                return setor.update({ ativo: true }).then(response => {
                    res.status(200).json({ success: true, setor: response })
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
            Setor.findOne({ where: { id: req.params.id } }).then(setor => {
                return setor.update({ ativo: false }).then(response => {
                    res.status(200).json({ success: true, setor: response })
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

    listActive: (req, res, next) => {
        try {
            Setor.findAll({ where: { ativo: true } }).then((response) => {
                res.status(200).json({ success: true, setores: response })
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
    }

}
