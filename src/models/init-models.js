import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _Department from  "./department.js";
import _Employee from  "./employee.js";
import _Employeedepartmenthistory from  "./employeedepartmenthistory.js";
import _Employeepayhistory from  "./employeepayhistory.js";
import _Person from  "./person.js";
import _Shift from  "./shift.js";
import { dbConfig } from "../config/db.config.js";

export const initModels = (sequelize) => {
  const Department = _Department.init(sequelize, DataTypes);
  const Employee = _Employee.init(sequelize, DataTypes);
  const Employeedepartmenthistory = _Employeedepartmenthistory.init(sequelize, DataTypes);
  const Employeepayhistory = _Employeepayhistory.init(sequelize, DataTypes);
  const Person = _Person.init(sequelize, DataTypes);
  const Shift = _Shift.init(sequelize, DataTypes);

  Employeedepartmenthistory.belongsTo(Department, { as: "department", foreignKey: "departmentid"});
  Department.hasMany(Employeedepartmenthistory, { as: "employeedepartmenthistories", foreignKey: "departmentid"});
  Employeedepartmenthistory.belongsTo(Employee, { as: "businessentity", foreignKey: "businessentityid"});
  Employee.hasMany(Employeedepartmenthistory, { as: "employeedepartmenthistories", foreignKey: "businessentityid"});
  Employeepayhistory.belongsTo(Employee, { as: "businessentity", foreignKey: "businessentityid"});
  Employee.hasMany(Employeepayhistory, { as: "employeepayhistories", foreignKey: "businessentityid"});
  Employee.belongsTo(Person, { as: "businessentity", foreignKey: "businessentityid"});
  Person.hasOne(Employee, { as: "employee", foreignKey: "businessentityid"});
  Employeedepartmenthistory.belongsTo(Shift, { as: "shift", foreignKey: "shiftid"});
  Shift.hasMany(Employeedepartmenthistory, { as: "employeedepartmenthistories", foreignKey: "shiftid"});

  return {
    Department,
    Employee,
    Employeedepartmenthistory,
    Employeepayhistory,
    Person,
    Shift,
  };
}

export const models = initModels(dbConfig);