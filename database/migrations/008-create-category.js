'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
    create table Categories
    (
      id int auto_increment primary key,
      label     varchar(255)   not null,
      createdAt datetime       not null,
      updatedAt datetime       not null
    );
    `);
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`
    drop table Categories;
  `);
  },
};
