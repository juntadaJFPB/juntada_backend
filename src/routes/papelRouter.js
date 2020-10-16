import routerx from 'express-promise-router'
import auth from '../middlewares/auth'
import papelController from '../controllers/papelController'

const router = routerx()

router.post('/', auth.verifyAdmin, papelController.add)
router.put('/:id', auth.verifyAdmin, papelController.update)
router.get('/ativos', auth.verifyAdmin, papelController.listAtivos)
router.put('/deactivate/:id', auth.verifyAdmin, papelController.deactivate)
router.put('/activate/:id', auth.verifyAdmin, papelController.activate)
router.get('/:id', auth.verifyAdmin, papelController.findById)
router.get('/', auth.verifyAdmin, papelController.list)

export default router