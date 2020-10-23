'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('perfil', [{
            id: 1,
            descricao: '1ª VARA FEDERAL / João Pessoa / Diretor de Secretaria',
            // ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        }, {
            id: 2,
            descricao: '1ª VARA FEDERAL / 1ª VARA FEDERAL / Diretor de Secretaria',
            // ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        }, {
            id: 3,
            descricao: '1ª VARA FEDERAL / 1ª VARA FEDERAL / Servidor Cadastrador',
            // ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        },
        {
            id: 4,
            descricao: '2ª VARA FEDERAL / João Pessoa / Diretor de Secretaria',
            // ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        },
        {
            id: 5,
            descricao: '2ª VARA FEDERAL / 2ª VARA FEDERAL / Diretor de Secretaria',
            // ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        },
        {
            id: 6,
            descricao: '3ª VARA FEDERAL / 3ª VARA FEDERAL / Diretor de Secretaria',
            // ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        },
        {
            id: 7,
            descricao: '3ª VARA FEDERAL / 3ª VARA FEDERAL / Servidor Cadastrador',
            // ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        },
        {
            id: 8,
            descricao: '4ª VARA FEDERAL / 4ª VARA FEDERAL / Servidor Cadastrador',
            // ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        },
        {
            id: 9,
            descricao: '4ª VARA FEDERAL / 4ª VARA FEDERAL / Diretor de Secretaria',
            // ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        },
        {
            id: 10,
            descricao: '5ª VARA FEDERAL / 5ª VARA FEDERAL / Diretor de Secretaria',
            // ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        },
        {
            id: 11,
            descricao: '6ª VARA FEDERAL / 6ª VARA FEDERAL / Diretor de Secretaria',
            // ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        },
        {
            id: 12,
            descricao: '8ª VARA FEDERAL / 8ª VARA FEDERAL / Diretor de Secretaria',
            // ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        },
        {
            id: 13,
            descricao: '11ª VARA FEDERAL / 11ª VARA FEDERAL / Servidor Retificador',
            // ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        },
        {
            id: 14,
            descricao: '11ª VARA FEDERAL / 11ª VARA FEDERAL / Diretor de Secretaria',
            // ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        },
        {
            id: 15,
            descricao: '12ª VARA FEDERAL / 12ª VARA FEDERAL / Diretor de Secretaria',
            // ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        },
        {
            id: 16,
            descricao: '14º VARA FEDERAL / 14ª VARA FEDERAL / Diretor de Secretaria',
            // ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        },
        {
            id: 17,
            descricao: 'Escritório de Inovação / João Pessoa / Estágiario',
            // ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        }
    ], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('perfil', null, {});
    }
};
