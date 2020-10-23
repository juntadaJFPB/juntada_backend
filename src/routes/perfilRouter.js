import routerx from 'express-promise-router'
import perfilController from '../controllers/perfilController'
import auth from '../middlewares/auth'


const router = routerx()



// router.get('/:id',auth.verifyAdmin, perfilController.findById)
router.get('/', /*auth.verifyAdmin,*/ perfilController.list)
router.get('/ativos', /*auth.verifyAdmin,*/ perfilController.listAtivos)
router.put('/deactivate/:id', /*auth.verifyAdmin,*/ perfilController.deactivate)
router.put('/activate/:id', /*auth.verifyAdmin,*/ perfilController.activate)
router.post('/',/*auth.verifyAdmin,*/ perfilController.add)
router.put('/:id', /*auth.verifyAdmin,*/ perfilController.update)



export default router