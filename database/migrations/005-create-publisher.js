'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
    create table Publishers
    (
      id int auto_increment
        primary key,
      address    varchar(255) not null,
      zipcode    varchar(255) not null,
      city       varchar(255) not null,
      country    varchar(255) not null,
      picture    varchar(255) null,
      createdAt  datetime     not null,
      updatedAt  datetime     not null
    );
    `);
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      drop table Publishers;
    `);
  },
};
