const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Course.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      section: {
        type: DataTypes.STRING,
      },
      type: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Course',
      underscored: true,
      tableName: 'course',
    }
  );

  return Course;
};
