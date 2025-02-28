import { Router } from "express";
import { login } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";


const router = Router()

router.post('/login', login);
router.get('/access', authMiddleware, (req, res) => {
    res.status(200).json({message: 'Funciona la autenticación'});
});

export default router;