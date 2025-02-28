import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Department extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    departmentid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    groupname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    modifieddate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'department',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_department",
        unique: true,
        fields: [
          { name: "departmentid" },
        ]
      },
    ]
  });
  }
}
