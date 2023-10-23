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
      Movie.hasMany(models.Review);
    }
  }
  Movie.init({
    title: {
      type: DataTypes.STRING(255), // Batasan panjang maksimal 255 karakter
      allowNull: false,
      validate: {
        notEmpty: true, // Tidak boleh kosong
      },
    },
    description: { 
      type: DataTypes.TEXT,
      allowNull: false,
    validate: {
      notEmpty: true, // Tidak boleh kosong
    },
  },
}, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};