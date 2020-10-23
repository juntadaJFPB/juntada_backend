//import auth from "../middlewares/auth";
import routerx from "express-promise-router";
import correspondenciaController from "../controllers/correspondenciaController";
import auth from "../middlewares/auth";

const router = routerx();

router.put('/:id', correspondenciaController.update)
router.post('/',  auth.verifySuper,correspondenciaController.add)
router.get("/",  auth.verifyUsuario, correspondenciaController.list);
router.post("/upload/:id",auth.verifyUsuario, correspondenciaController.upload);
router.get('/retrieve/:arquivo/:token', correspondenciaController.download)
router.get('/:id', auth.verifyAdmin,correspondenciaController.findById)
router.put('/deactivate/:id', correspondenciaController.deactivate)
router.delete('/delete/:id', correspondenciaController.delete);


export default router;
