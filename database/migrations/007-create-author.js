'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
    create table Authors
    (
      id int auto_increment
        primary key,
      userName     varchar(100) not null,
      firstName    varchar(100) null,
      lastName     varchar(100) null,
      link         varchar(255) null,
      description  text         null,
      picture      varchar(255) null,
      createdAt    datetime     not null,
      updatedAt    datetime     not null
    );
    `);
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      drop table Authors;
  `);
  },
};
