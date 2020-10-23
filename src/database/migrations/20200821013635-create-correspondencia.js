"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("correspondencia", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      numero_processo: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      destinatario: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      data: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false,
      },

      status: {
        allowNull: false,
        type: Sequelize.ENUM("Upado", "Nao Upado"),
        defaultValue: "Nao Upado",
      },

      status_bot: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: false,
        defaultValue: "Ainda nao houve tentativa",
      },

      usuario_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "usuarios",
          key: "id",
        },
      },

      ativo: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },

      created_at: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        type: Sequelize.DATE,
      },

      updated_at: {
        allowNull: false,
        defaultValue: Sequelize.fn("NOW"),
        type: Sequelize.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("correspondencia");
  },
};
