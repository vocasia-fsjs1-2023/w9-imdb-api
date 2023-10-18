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
    const moviesData = [];
    for (let i = 0; i < 5; i++) {
      moviesData.push({
        title: faker.lorem.words(),
        description: faker.lorem.paragraph(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    // Insert movies data into 'movies' table
    await queryInterface.bulkInsert('movies', moviesData, {});

    // Generate fake review data
    const reviewsData = [];
    for (let i = 0; i < 10; i++) {
      reviewsData.push({
        movieId: Math.floor(Math.random() * 5) + 1, // Random movieId between 1 and 5
        rating: Math.floor(Math.random() * 5) + 1,  // Random rating between 1 and 5
        comment: faker.lorem.paragraph(),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    // Insert reviews data into 'reviews' table
    await queryInterface.bulkInsert('reviews', reviewsData, {});
    }

    // Insert reviews data into 'reviews' table
    await queryInterface.bulkInsert('reviews', reviewsData, {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('movies', null, {});
    await queryInterface.bulkDelete('reviews', null, {});
  
};
