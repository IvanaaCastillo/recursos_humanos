import jwt from "jsonwebtoken";
import { config } from "../config/env.config.js";

const { secretKey } = config

const validUser = {
    email: "hola@gmail.com",
    password: "password123",
};

export const login = async (req, res) => {
    try {
    
    const { email, password } = req.body;

    if(!email || email !== validUser.email || !password || password !== validUser.password) {
        res.status(500).json({ 
            message: 'Las credenciales no son correctas', 
            status: 500
        })
    };
    
    const user = { email, id: 123456789 }

    const token = jwt.sign({ id: user.id, email: user.email }, secretKey, {
        expiresIn: "1h",
    });

    res.status(202).json({
        message: "La autenticación ha sido realizado con éxito",
        status: 202,
        data: { user, token },
    });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            message: 'Login no correcto'})
    }
};