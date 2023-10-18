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
        title: "EXPEND4BLES",
        description: "Berbekal setiap senjata yang bisa mereka dapatkan, Expendables adalah garis pertahanan terakhir di dunia dan tim yang dipanggil ketika semua opsi lain.",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "SAW X",
        description: "John yang sakit dan putus asa melakukan perjalanan ke Meksiko untuk prosedur medis yang berisiko dan eksperimental dengan harapan penyembuhan ajaib untuk kankernya hanya untuk menemukan seluruh operasi adalah penipuan untuk menipu yang paling rentan..",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "THE EQUALIZER 3",
        description: "Robert McCall menemukan dirinya di rumah di Italia Selatan tetapi ia menemukan teman-temannya berada di bawah kendali bos kejahatan lokal. Ketika peristiwa berubah mematikan, McCall tahu apa yang harus dia lakukan: menjadi pelindung teman-temannya dengan menghadapi mafia.",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "THE NUN II",
        description: "1956 - Prancis. Seorang pendeta dibunuh. Kejahatan sedang menyebar. Sekuel dari hit besar di seluruh dunia mengikuti Sister Irene saat dia sekali lagi berhadapan langsung dengan Valak, biarawati iblis..",
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        title: "TRANSFORMERS: RISE OF THE BEASTS",
        description: "Selama tahun 90-an, faksi baru Transformers - Maximals - bergabung dengan Autobots sebagai sekutu dalam pertempuran untuk Bumi..",
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
