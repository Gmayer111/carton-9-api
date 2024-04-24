'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
    create table ComicCategories
    (
      comicId    int not null,
      categoryId int not null,
      createdAt datetime        not null,
      updatedAt datetime        not null,
      constraint ComicCategories_CategoryId_ComicId_unique
        unique (comicId, categoryId),
      constraint ComicCategories_ibfk_1
        foreign key comicId (comicId) references Comics (id)
            on update cascade on delete cascade,
      constraint ComicCategories_ibfk_2
        foreign key categoryId (categoryId) references Categories (id)
            on update cascade on delete cascade
    );
    `);
  },

  down: async (queryInterface) => {
    await queryInterface.sequelize.query(`
    drop table ComicCategories;
  `);
  },
};
