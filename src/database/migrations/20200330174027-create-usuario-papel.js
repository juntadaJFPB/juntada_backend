'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('usuario_papel', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            
            descricao: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true
            },

            ativo: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
                defaultValue: true
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
        return queryInterface.dropTable('usuario_papel');
    }
};