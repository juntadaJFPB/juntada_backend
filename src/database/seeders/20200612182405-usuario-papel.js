'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('usuario_papel', [{
            id: 1,
            descricao: 'super',
            ativo: true,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        }, {
            id: 2,
            descricao: 'admin',
            ativo: true,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        }, {
            id: 3,
            descricao: 'usuario',
            ativo: true,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('usuario_papel', null, {});
    }
};
