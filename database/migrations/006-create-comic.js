'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
    create table Comics
    (
      id int auto_increment
        primary key,
      title          varchar(255) not null,
      releaseDate    varchar(255) not null,
      description    text         null,
      tome           int          null,
      picture        varchar(255) null,
      collectionId   int not null,
      publisherId    int not null,
      createdAt      datetime     not null,
      updatedAt      datetime     not null,
      constraint Comics_ibfk_1
          foreign key collectionId (collectionId) references Collections (id)
            on update cascade on delete cascade,
      constraint Comics_ibfk_2
          foreign key publisherId (publisherId) references Publishers (id)
            on update cascade on delete cascade
    );
    `);

    await queryInterface.sequelize.query(
      `alter table Comics modify description null;`,
    );
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      drop table Comics;
    `);
  },
};
