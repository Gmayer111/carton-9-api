'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
    INSERT INTO Categories (label, createdAt, updatedAt) 
    VALUES 
    ('Science-fiction', NOW(), NOW()),
    ('Western', NOW(), NOW()),
    ('Aventure', NOW(), NOW()),
    ('Humour', NOW(), NOW()),
    ('Historique', NOW(), NOW()),
    ('Manga', NOW(), NOW()),
    ('Héroïque Fantasy', NOW(), NOW()),
    ('Comic strip', NOW(), NOW())
    `);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
