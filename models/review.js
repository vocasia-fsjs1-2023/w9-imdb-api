'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.Movie);
    }
  }
  Review.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true, // Harus integer
        min: 0, // Tidak boleh kurang dari 0
        max: 5, // Tidak boleh lebih dari 5
      },
    },
    movieId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};