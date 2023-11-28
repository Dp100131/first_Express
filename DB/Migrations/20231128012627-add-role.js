'use strict';

const { UserSchema, USER_TABLE} = require('./../Models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    await queryInterface.addColumn(USER_TABLE, 'role', UserSchema.role);
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface) {

    await queryInterface.removeColumn(USER_TABLE, 'role');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
