/*Pregunta 1*/
SELECT
	businessentityid,
	nationalidnumber,
	jobtitle,
	hiredate,
	vacationhours
FROM employee;


/*Pregunta 2*/
SELECT
	jobtitle,
	COUNT(*) AS "Cantidad de empleados"
FROM 
	employee
WHERE 
    jobtitle = 'Tool Designer'
GROUP BY 
    jobtitle;


/*Pregunta 3*/
SELECT 
    e.nationalidnumber,
    sh.name
FROM 
    shift sh
JOIN 
    employeedepartmenthistory edh ON sh.shiftid = edh.shiftid
JOIN 
	employee e ON e.businessentityid = edh.businessentityid;