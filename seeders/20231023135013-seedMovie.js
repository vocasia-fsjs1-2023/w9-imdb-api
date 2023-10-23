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
        title: "Avatar",
        description: "Disutradarai oleh James Cameron, film ini adalah film fiksi ilmiah epik yang berlatar di planet Pandora dan mengikuti petualangan seorang marinir yang terlibat dalam konflik dengan suku asli.",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "Inception ",
        description: "Film ini mengikuti seorang pencuri yang merancang aksi terakhirnya: masuk ke mimpi seseorang untuk mencuri rahasia dari dalam alam bawah sadar.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Harry Potter and the Sorcerer's Stone",
        description: " Film pertama mengenalkan kita pada dunia sihir dan mengikuti Harry saat dia menerima surat undangan untuk bergabung dengan sekolah sihir Hogwarts.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Harry Potter and the Deathly Hallows",
        description: " Film terakhir dalam seri ini mengikuti pertempuran epik antara Harry dan rekan-rekannya melawan Voldemort.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "The Dark Knight",
        description: "film ini adalah bagian dari trilogi Batman yang menghadirkan Joker yang diperankan oleh Heath Ledger dalam salah satu penampilan terbaiknya.",
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ], 
    {});
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
