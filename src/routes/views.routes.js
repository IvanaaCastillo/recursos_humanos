import { Router } from "express";
import { getAllEmployee, filterEmployees } from "../controllers/employee.controller.js";

const router = Router();

router.get('/', async (req, res) => {
    try {
        const employee = await getAllEmployee(req, res);
        res.render('pages/home', { employee });
    } catch (error) {
        res.status(500).json({
            err: 'Error al cargar la página'})
    }
});



/*router.get('/', async(req, res) => {
    res.render('pages/home');
});*/

/*router.post('/filter', async(req, res) => {
    res.render('pages/home')
});*/

router.post('/filter', async(req, res) => {
    try {
        const employee = await filterEmployees(req.body);
        console.log(employee)
        res.render('pages/home', { employee });

    } catch (error) {
        res.status(500).json({
            err: 'Error al cargar la página'})
    }
});


export default router;