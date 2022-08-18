const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Person.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      first_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      dni: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      home_phone: {
        type: DataTypes.STRING
      },
      mobile_phone: {
        type: DataTypes.STRING
      },
    },
    {
      sequelize,
      modelName: 'Person',
      underscored: true,
      tableName: 'persons',
    }
  );

  return Person;
};
