'use strict';

module.exports = (sequelize, DataTypes) => {
    const Setor = sequelize.define('Setor', {
        descricao: DataTypes.STRING,
        endereco: DataTypes.STRING,
        ativo: DataTypes.BOOLEAN,
    }, {
        freezeTableName: true,
        tableName: 'setores'
    });

    Setor.associate = function (models) {
        Setor.hasMany(models.Usuario, { as: 'usuarios', foreignKey: 'setor_id' })
    };

    return Setor;
};