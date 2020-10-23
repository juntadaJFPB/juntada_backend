import routerx from 'express-promise-router'
import relatorioController from '../controllers/relatorioController'
import auth from '../middlewares/auth'


const router = routerx()



router.get('/:id', auth.verifyUsuario, relatorioController.findById)
router.get('/', auth.verifyUsuario, relatorioController.list)
router.post('/', auth.verifyUsuario, relatorioController.add)
router.put('/:id', auth.verifyUsuario, relatorioController.update)
// router.put('/addCorrespondencia/:id', relatorioController.addCorrespondencia)
router.post('/up', auth.verifyUsuario, relatorioController.up)


export default router