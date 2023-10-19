"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.Movie, {
        foreignKey: "movieId",
      });
    }
  }
  Review.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 255], // Panjang maksimal 255 karakter
          notEmpty: true, // Tidak boleh string kosong atau null
        },
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true, // Tidak boleh string kosong atau null
        },
      },

      rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0, // Tidak boleh kurang dari 0
          max: 5, // Tidak boleh lebih dari 5
        },
      },

      movieId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;
};
