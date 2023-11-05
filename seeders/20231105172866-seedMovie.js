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
        title: "Inception",
        description: "Seorang pencuri pikiran ahli, Cobb, memasuki mimpi orang lain untuk mencuri rahasia bisnis. Namun, saat tugas terakhirnya, dia ditawari kesempatan untuk mewujudkan obsesinya.",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "The Shawshank Redemption",
        description: "Sebuah kisah tentang persahabatan tak terduga di dalam penjara Shawshank.",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "Avatar",
        description: " Di sebuah planet yang eksotis bernama Pandora, manusia mencoba mengeksploitasi sumber daya alamnya.",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        description: " Sebuah petualangan epik yang dimulai ketika Frodo Baggins, seorang hobbit, mewarisi Cincin Kekuasaan dan membentuk persaudaraan dengan berbagai makhluk dari berbagai ras untuk menghentikan kekuatan jahat Sauron.",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "The Dark Knight",
        description: "Batman (Bruce Wayne) harus menghadapi salah satu musuh terbesarnya, Joker, yang bertekad untuk membawa kekacauan ke Gotham City. Pertarungan antara kegelapan dan keadilan menciptakan konflik moral yang dalam, dan Batman harus memutuskan sejauh mana ia akan pergi demi melindungi kota.",
        createdAt: new Date(),
        updatedAt: new Date()
      }
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
