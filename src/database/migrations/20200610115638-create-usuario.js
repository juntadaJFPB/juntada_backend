'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('usuarios', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            nome: {
                allowNull: false,
                type: Sequelize.STRING
            },

            usuario: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: false
            },
            
            setor_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                    model: 'setores',
                    key: 'id'
                }
            },

            papel_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                    model: 'usuario_papel',
                    key: 'id'
                }
            },
            
            perfil_id: {
                allowNull: true,
                type: Sequelize.INTEGER,
                references: {
                    model: 'perfil',
                    key:'id',
                }
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
        return queryInterface.dropTable('usuarios');
    }
};