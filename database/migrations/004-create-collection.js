'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
    create table Collections
    (
      id int auto_increment primary key,
      name      varchar(255)   not null,
      total     int            null,
      createdAt datetime       not null,
      updatedAt datetime       not null
    );
    `);
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      drop table Collections;
    `);
  },
};
