'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('relatorio', {
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

      numero_juntadas: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      // correspondencia_id: {
      //   allowNull: true,
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: 'correspondencia',
      //     key: 'id'
      //   }
      // },


      usuario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: 'usuarios',
            key: 'id'
        }
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
    return queryInterface.dropTable('relatorio');
  }
};
