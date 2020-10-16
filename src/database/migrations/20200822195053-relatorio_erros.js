'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('relatorio_erros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      descricao: {
        allowNull: false,
        type: Sequelize.STRING
      },
      numero_processo: {
        allowNull: true,
        type: Sequelize.STRING,
        unique: false
      },
      data_hora: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false
      },

      data_correspondencia:{
        allowNull: true,
        type: Sequelize.STRING,
        unique: false
      },

      created_at: {
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
        type: Sequelize.DATE
      },

      updated_at: {
        allowNull: false,
        defaultValue: Sequelize.fn('NOW'),
        type: Sequelize.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('relatorio_erros');
  }
};
