'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
    create table ComicAuthors
    (
      comicId  int not null,
      authorId int not null,
      createdAt datetime        not null,
      updatedAt datetime        not null,
      constraint ComicAuthors_AuthorId_ComicId_unique
        unique (comicId, authorId),
      constraint ComicAuthors_ibfk_1
        foreign key comicId (comicId) references Comics (id)
            on update cascade on delete cascade,
      constraint ComicAuthors_ibfk_2
        foreign key authorId (authorId) references Authors (id)
            on update cascade on delete cascade
    );
    `);
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`
    drop table ComicAuthors;
  `);
  },
};
