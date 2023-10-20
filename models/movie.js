'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.hasMany(models.Review, {
        foreignKey: 'movieId',
        onDelete: 'CASCADE',
      });
    }
  }
  Movie.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull: {
          msg: "input tidak boleh null"
        },
        notEmpty: {
          ms: "input tidak boleh string kosong"
        },
        len: {
          args: [1, 255],
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "input tidak boleh null"
        },
        notEmpty: {
          msg: "input tidak boleh string kosong"
        }
      }
    },
   }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};