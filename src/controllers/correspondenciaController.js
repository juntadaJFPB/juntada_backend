import { Op } from "sequelize";
import { Correspondencia } from "../database/models";
import { Usuario } from "../database/models"
import { Anexo } from "../database/models"

import path from 'path'
import utilsService from '../services/utilsService'
import tokenService from '../services/tokenService'


const storeFile = (file) => {
  return new Promise((resolve, reject) => {
    const arquivo = utilsService.renameFile()
    file.mv(utilsService.formatUploadPath(arquivo), (error) => {
      if (error) {
        reject({ error: error })
      } else {
        resolve({ arquivo: arquivo })
      }
    })
  })
}

export default {
  add: (req, res, next) => {
    try {
      Correspondencia.create(req.body)
        .then((response) => {
          res.status(200).json({ success: true, correspondencia: response });
        })
        .catch((error) => {
          console.log(error)
          res.status(400).json({
            success: false,
            message: "Ocorreu um erro enquanto os dados eram inseridos.",
          });
        });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Ocorreu um erro desconhecido com o sistema.",
      });
      next(error);
    }
  },
  update: (req, res, next) => {
    try {
      Correspondencia.update(req.body, { where: { id: req.params.id } })
        .then((response) => {
          Correspondencia.findOne({ where: { id: req.params.id } }).then(
            (response) => {
              if (response) {
                res
                  .status(200)
                  .json({ success: true, correspondencia: response });
              } else {
                res.status(404).json({
                  success: false,
                  message:
                    "O registro solicitado não foi encontrado no sistema.",
                });
              }
            }
          );
        })
        .catch((error) => {
          res.status(400).json({
            success: false,
            message: "Ocorreu um erro enquanto os dados eram atualizados.",
          });
        });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Ocorreu um erro desconhecido com o sistema.",
      });
      next(error);
    }
  },
  list: (req, res, next) => {
    try {
      Correspondencia.findAll({
        attributes: {
          exclude: ["usuario_id"],
        },
        include: [
          {
            model: Usuario,
            as: "usuarios",
          },
          {
            model: Anexo,
            as: 'anexo'
          },
 
          // {
          //   all: true,
          // }
        ],
      })
        .then((response) => {
          res.status(200).json({ success: true, correspondencia: response });
        })
        .catch((error) => {
          console.log(error)
          res.status(400).json({
            success: false,
            message: "Ocorreu um erro enquanto os dados eram recuperados.",
          });
        });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Ocorreu um erro desconhecido com o sistema.",
      });
      next(error);
    }
  },
  findById: (req, res, next) => {
    try {
      Correspondencia.findOne({
        where: { id: req.params.id },
      })
        .then((response) => {
          if (response) {
            res.status(200).json({ success: true, correspondencia: response });
          } else {
            res.status(404).json({
              success: false,
              message: "O registro solicitado não foi encontrado no sistema.",
            });
          }
        })
        .catch((error) => {
          res.status(400).json({
            success: false,
            message: "Ocorreu um erro enquanto o dado era recuperado.",
          });
        });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Ocorreu um erro desconhecido com o sistema.",
      });
      next(error);
    }
  },
  ///ANEXOS

  upload: (req, res, next) => {
    try {
      Correspondencia.findOne({ where: { id: req.params.id } }).then(correspondencia => {
        if (correspondencia && req.files && 'anexo' in req.files && req.files.anexo.name.endsWith('.pdf')) {
          storeFile(req.files.anexo).then(anexo => {
            Anexo.create({
              arquivo: anexo.arquivo,
            //observacoes: req.body.observacoes,
              cumprido: req.body.cumprido,
              correspondencia_id: req.params.id
            }).then(anexo => {
              correspondencia.update({status: 'Upado'})
              res.status(200).json({ success: true, anexo })
            }).catch(error => {
              console.log(error)
              res.status(400).json({
                error: error,
                success: false,
                message: 'Ocorreu um erro enquanto o arquivo era salvo.'
              })
            })
          }).catch(error => {
            console.log(error)
            res.status(500).json({
              error: error,
              success: false,
              message: 'Ocorreu um erro enquanto o arquivo era salvo.'
            })
          })
        } else {
          console.log(error)
          res.status(400).json({
            success: false,
            message: 'Ocorreu um erro enquanto o arquivo era salvo.'
          })
        }
      }).catch((error) => {
        console.log(error)
        res.status(400).json({
          error: error,
          success: false,
          message: 'Ocorreu um erro enquanto os dados eram recuperados.'
        })
      })
    } catch (error) {
      console.log(error)
      res.status(500).json({
        success: false,
        message: 'Ocorreu um erro desconhecido com o sistema.'
      })
      next(error)
    }
  },

  download: (req, res, next) => {
    try {
      tokenService.verifyToken(req.params.token).then((result) => {
        if (result) {
          Anexo.findOne({ where: { arquivo: req.params.arquivo } }).then(anexo => {
            if (anexo) {
              res.sendFile(utilsService.formatDownloadPath(anexo), {
                root: 'uploads/',
                dotfiles: 'deny',
                headers: {
                  'x-sent': true,
                  'x-timestamp': Date.now(),
                  'Content-Type': 'application/pdf'
                }
              }, (error) => {
                if (error) {
                  res.status(404).json({
                    error: error,
                    success: false,
                    message: 'O arquivo solicitado não foi encontrado no sistema.'
                  })
                }
              })
            } else {
              res.status(404).json({
                success: false,
                message: 'O arquivo solicitado não foi encontrado no sistema.'
              })
            }
          }).catch(error => {
            console.log(error)
            res.status(400).json({
              error: error,
              success: false,
              message: 'Ocorreu um erro enquanto o arquivo era recuperado.'
            })
          })
        } else {
          res.status(401).send({
            success: false,
            message: 'Você não possui um token de acesso válido.'
          })
        }
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
        Correspondencia.findOne({ where: { id: req.params.id } }).then(correspondencia => {
            return correspondencia.update(req.body).then(response => {
                res.status(200).json({ success: true, correspondencia: response })
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

};