import { Router } from 'express';
import { filterEmployees, getAllEmployee } from '../controllers/employee.controller.js';





const router = Router();

router.get('/', getAllEmployee);
router.post('/filters', filterEmployees);


export default router;