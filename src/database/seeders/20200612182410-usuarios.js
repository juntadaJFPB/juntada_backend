'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('usuarios', [{
            id: 1,
            nome: 'Ricardo Correia de Miranda Henriques',
            usuario: 'ricardo',
            // perfil: '1ª VARA FEDERAL / João Pessoa / Diretor de Secretaria',
            setor_id: 1,
            papel_id: 1,
            perfil_id: 17,
            ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        }, {
            id: 2,
            nome: 'Luiz Linderman de Queiroz Medeiros Sobrinho',
            usuario: 'linderman',
            // perfil: '5ª VARA FEDERAL / 5ª VARA FEDERAL / Diretor de Secretaria',
            setor_id: 2,
            papel_id: 1,
            perfil_id: 10,
            ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        }, {
            id: 3,
            nome: 'José Victor Dantas',
            usuario: 'estagio.josevictor',
            // perfil: 'Escritório de Inovação / João Pessoa / Estágiario',
            setor_id: 3,
            papel_id: 1,
            perfil_id: 17,
            ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        }, {
            id: 4,
            nome: 'Jailson Silva de França',
            usuario: 'estagio.jailson',
            // perfil: 'Escritório de Inovação / João Pessoa / Estágiario',
            setor_id: 3,
            papel_id: 1,
            perfil_id: 17,
            ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        }, {
            id: 5,
            nome: 'Mauricio Pereira da Costa Junior',
            usuario: 'estagio.mauricioj',
            // perfil: 'Escritório de Inovação / João Pessoa / Estágiario',
            setor_id: 3,
            papel_id: 1,
            perfil_id: 17,
            ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        }, {
            id: 6,
            nome: 'Paulo Henrique Felix Oliveira',
            usuario: 'estagio.henriqueo',
            // perfil: 'Escritório de Inovação / João Pessoa / Estágiario',
            setor_id: 3,
            papel_id: 1,
            perfil_id: 17,
            ativo: 1,
            created_at: Sequelize.fn('NOW'),
            updated_at: Sequelize.fn('NOW')
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('usuarios', null, {});
    }
};
