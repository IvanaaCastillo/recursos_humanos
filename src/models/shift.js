import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Shift extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    shiftid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    starttime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    endtime: {
      type: DataTypes.TIME,
      allowNull: true
    },
    modifieddate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'shift',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_shift",
        unique: true,
        fields: [
          { name: "shiftid" },
        ]
      },
    ]
  });
  }
}
