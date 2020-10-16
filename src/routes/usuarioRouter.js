import routerx from 'express-promise-router'
import usuarioController from '../controllers/usuarioController'
import auth from '../middlewares/auth'
import { getUser, autenticarLdap } from '../middlewares/ldap'

const router = routerx()

router.get('/ativos',  auth.verifyAdmin, usuarioController.listAtivos)
router.get('/setor/:id', auth.verifyAdmin, usuarioController.listUsuarioBySetor)
router.get('/papel/:id', auth.verifyAdmin, usuarioController.listUsuarioByPapel)
router.get('/:id', auth.verifyAdmin, usuarioController.findById)
router.get('/', auth.verifyAdmin, usuarioController.list)
router.post('/', auth.verifyAdmin, usuarioController.add)
router.put('/activate/:id', auth.verifyAdmin, usuarioController.activate)
router.put('/deactivate/:id', auth.verifyAdmin, usuarioController.deactivate)
router.put('/:id', auth.verifyAdmin, usuarioController.update)
router.post('/login', getUser, /*autenticarLdap,*/ usuarioController.login)

export default router