'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
    create table Users
    (
      id int auto_increment
        primary key,
      firstName    varchar(255) not null,
      lastName     varchar(255) not null,
      email        varchar(255) not null unique,
      password     varchar(255) not null,
      description  text         null,
      birthdate    datetime     null,
      nationality  varchar(100) null,
      picture      varchar(255) null,
      role         enum ('user', 'admin')  default 'user'  not null, 
      createdAt    datetime     not null,
      updatedAt    datetime     not null
    );
    `);
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      drop table Users;
  `);
  },
};
