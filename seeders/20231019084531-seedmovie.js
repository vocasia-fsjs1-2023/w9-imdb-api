'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('movies', 
    [
      {
        title: 'titanic',
        description: 'kapal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'frozen',
        description: 'ice',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'harry potter',
        description: 'penyihir',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'the conjuring',
        description: 'horor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'notting hill',
        description: 'romance',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('movies', null, {});
  }
};
