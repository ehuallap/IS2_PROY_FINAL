const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  Schedule.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      day: {
        type: DataTypes.STRING,
      },
      start: {
        type: DataTypes.TIME,
      },
      finish: {
        type: DataTypes.TIME,
      },
    },
    {
      sequelize,
      modelName: 'Schedule',
      underscored: true,
      tableName: 'schedule',
    }
  );

  return Schedule;
};
