import { Op } from 'sequelize';
import { models } from '../models/init-models.js';




export const getAllEmployee = async (req, res) => {
    try {
        const employees = await models.Employee.findAll({
            attributes: ['businessentityid', 'nationalidnumber', 'jobtitle', 'hiredate', 'vacationhours'],
            include: {
                model: models.Employeedepartmenthistory,
                as: 'employeedepartmenthistories',
                attributes: ['startdate'],
            }
        });

        const plainEmployees = employees.map(employee => employee.toJSON());
    
        return plainEmployees;

    } catch (error) {
        console.error('Error al obtener los datos de los empleados', error);
        throw new Error ('Error al obtener los datos de los empleados');
    }
};



export const filterEmployees = async (data) => {
    try {
        const { nationalidnumber, fechaInicio, fechaTermino } = data;

        const filters = {};

        if (nationalidnumber) {
            filters.nationalidnumber = nationalidnumber;
        }

        if (fechaInicio) {
            filters.hiredate = { [Op.gte]: `${fechaInicio}` };
        }

        /*if (fechaTermino) {
            filters.hiredate = {...filters.hiredate, [Op.lte]: fechaTermino,};
        }*/

        const employees = await models.Employee.findAll({
            where: filters,
        });

        const plainEmployees = employees.map((employee) => employee.toJSON());

        return plainEmployees;

    } catch (error) {
        res.status(500).json({
            message: 'Error al obtener los datos de los empleados',
            status: 500
        });
    }
};