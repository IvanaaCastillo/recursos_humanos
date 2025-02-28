import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Employee extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    businessentityid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'person',
        key: 'businessentityid'
      }
    },
    nationalidnumber: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    loginid: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    jobtitle: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    maritalstatus: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    gender: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    hiredate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    salariedflag: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    vacationhours: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    sickleavehours: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    currentflag: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    modifieddate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    organizationnode: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'employee',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_employee",
        unique: true,
        fields: [
          { name: "businessentityid" },
        ]
      },
    ]
  });
  }
}
