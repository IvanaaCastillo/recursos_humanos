import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Person extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    businessentityid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    persontype: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    namestyle: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    firstname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    middlename: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    suffix: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    emailpromotion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    modifieddate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'person',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_person",
        unique: true,
        fields: [
          { name: "businessentityid" },
        ]
      },
    ]
  });
  }
}
