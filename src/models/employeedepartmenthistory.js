import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Employeedepartmenthistory extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    employeedepartmenthistoryid: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    businessentityid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'employee',
        key: 'businessentityid'
      }
    },
    departmentid: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      references: {
        model: 'department',
        key: 'departmentid'
      }
    },
    shiftid: {
      type: DataTypes.SMALLINT,
      allowNull: true,
      references: {
        model: 'shift',
        key: 'shiftid'
      }
    },
    startdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    enddate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    modifieddate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employeedepartmenthistory',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_employeedepartmenthistory",
        unique: true,
        fields: [
          { name: "employeedepartmenthistoryid" },
        ]
      },
    ]
  });
  }
}
