import routerx from 'express-promise-router'
import auth from '../middlewares/auth'
import setorController from '../controllers/setorController'

const router = routerx()

router.post('/', auth.verifyAdmin, setorController.add)
router.get('/ativos', auth.verifyUsuario, setorController.listActive)
router.get('/:id', auth.verifyUsuario, setorController.findById)
router.get('/', auth.verifyUsuario, setorController.list)
router.put('/:id', auth.verifyAdmin, setorController.update)
router.put('/activate/:id', auth.verifyAdmin, setorController.activate)
router.put('/deactivate/:id', auth.verifyAdmin, setorController.deactivate)

export default router