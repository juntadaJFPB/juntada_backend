import routerx from 'express-promise-router'

import papelRouter from './papelRouter'
import setorRouter from './setorRouter'
import usuarioRouter from './usuarioRouter'
import relatorioRouter from './relatorioRouter'
import correspondenciaRouter from './correspondenciaRouter'
import relatorio_errosRouter from './relatorio_errosRouter'
import perfilRouter from './perfilRouter'

const router = routerx()

router.use('/papeis', papelRouter)
router.use('/setores', setorRouter)
router.use('/usuarios', usuarioRouter)
router.use('/relatorio_erros', relatorio_errosRouter)
router.use('/correspondencia', correspondenciaRouter)
router.use('/relatorio', relatorioRouter)
router.use('/perfil', perfilRouter)

export { router }