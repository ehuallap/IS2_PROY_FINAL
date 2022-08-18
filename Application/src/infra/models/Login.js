const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Login extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Login.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      emailAddress : {
        type: DataTypes.STRING,
      },
      personId: {
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Login',
      underscored: true,
      tableName: 'login',
    }
  );

  return Login;
};
