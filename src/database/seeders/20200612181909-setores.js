'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('setores', [{
            id: 1,
            descricao: 'Núcleo Judiciário',
            endereco: 'R. João Teixeira de Carvalho, 480',
            ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        }, {
            id: 2,
            descricao: '3ª Vara Federal',
            endereco: 'R. João Teixeira de Carvalho, 480',
            ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        }, {
            id: 3,
            descricao: 'Escritório de Inovação',
            endereco: 'Rod. Gov. Antonio Mariz, 2051',
            ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('setores', null, {});
    }
};
