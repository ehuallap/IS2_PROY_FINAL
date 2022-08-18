const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Type.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name : {
        type: DataTypes.STRING,
      },
      studentsNumber: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Type',
      underscored: true,
      tableName: 'types',
    }
  );

  return Type;
};
