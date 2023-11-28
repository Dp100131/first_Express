'use strict';

const { CustomerSchema, CUSTOMER_TABLE} = require('./../Models/customer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface) {

    await queryInterface.dropTable(CUSTOMER_TABLE, CustomerSchema);
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
