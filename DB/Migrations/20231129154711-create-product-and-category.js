'use strict';

const { ProductSchema, PRODUCT_TABLE} = require('./../Models/product.model');
const { CategorySchema, CATEGORY_TABLE} = require('./../Models/category.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {


    await queryInterface.createTable(CategorySchema, CATEGORY_TABLE);
    await queryInterface.createTable(ProductSchema, PRODUCT_TABLE);
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface) {

    await queryInterface.dropTable(CategorySchema, CATEGORY_TABLE);
    await queryInterface.dropTable(ProductSchema, PRODUCT_TABLE);
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
