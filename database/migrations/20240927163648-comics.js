'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(
      `alter table Comics modify description text null;`,
    );

    await queryInterface.sequelize.query(
      `alter table Comics modify picture varchar(255) null;`,
    );
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(
      `alter table Comics modify description null;`,
    );
    await queryInterface.sequelize.query(
      `alter table Comics modify picture varchar(255) null;`,
    );
  },
};
