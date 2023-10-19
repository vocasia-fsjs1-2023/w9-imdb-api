"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Reviews", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          len: [1, 255], // Panjang maksimal 255 karakter
          notEmpty: true, // Tidak boleh string kosong atau null
        },
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true, // Tidak boleh string kosong atau null
        },
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 0, // Tidak boleh kurang dari 0
          max: 5, // Tidak boleh lebih dari 5
        },
      },
      movieId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    // Menambahkan association antara Review dan Movie
    await queryInterface.addConstraint("Reviews", {
      fields: ["movieId"],
      type: "foreign key",
      name: "custom_fkey_movieId",
      references: {
        table: "Movies",
        field: "id",
      },
      onDelete: "cascade", // Menghapus review saat movie terkait dihapus
      onUpdate: "cascade",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Reviews");
  },
};
