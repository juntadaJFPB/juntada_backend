import routerx from 'express-promise-router'
import relatorioController from '../controllers/relatorioController'
import auth from '../middlewares/auth'


const router = routerx()



router.get('/:id', auth.verifyAdmin, relatorioController.findById)
router.get('/', auth.verifyAdmin, relatorioController.list)
router.post('/', auth.verifyAdmin, relatorioController.add)
router.put('/:id', auth.verifyAdmin, relatorioController.update)
// router.put('/addCorrespondencia/:id', relatorioController.addCorrespondencia)
router.post('/up', auth.verifyAdmin, relatorioController.up)


export default router