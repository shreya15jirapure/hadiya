'use strict';
const { v4 } = require('uuid');
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
    await queryInterface.bulkInsert('Products', [
    {
      uuid: v4(),
      name: "Dell Inspiron 7415 AMD R5 5500U 14 inches(35cm) FHD Touch Display 2 in 1 Business Laptop (8GB/512GB SSD/Intel Integrated Graphics/Win 10 + MSO/Backlit KB + FPR + Active Pen /Pebble Metal Color, 1.5kg)",
      price: 71300.00,
      currency: "INR",
      imageURL: "https://m.media-amazon.com/images/I/514FlU4YKBS._SL1080_.jpg",
      createdAt: new Date("2022-08-27 15:11:47"),
      updatedAt: new Date("2022-08-27 15:11:47")
    }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
  }
};
