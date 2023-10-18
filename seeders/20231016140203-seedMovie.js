"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Movies",
      [
        {
          title: "Movies judul pertama",
          description: "Description Movie pertama",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Movies judul kedua",
          description: "Description Movie kedua",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Movies judul ketiga",
          description: "Description Movie ketiga",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Movies judul keempat",
          description: "Description Movie keempat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Movies judul kelima",
          description: "Description Movie kelima",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Movies", null, {});
  },
};
