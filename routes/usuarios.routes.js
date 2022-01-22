import { Router } from "express";
import { deleteUsuarios, getUsuarios, patchUsuarios, postUsuarios, putUsuarios } from "../controllers/usuarios.controller.js";

const router = Router();

router.get('/', getUsuarios);

router.post('/', postUsuarios)

router.put('/:id', putUsuarios)

router.patch('/', patchUsuarios)

router.delete('/', deleteUsuarios)


export default router;