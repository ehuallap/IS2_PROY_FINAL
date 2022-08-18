const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Professor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Professor.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      departament: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Professor',
      underscored: true,
      tableName: 'professor',
    }
  );

  return Professor;
};
