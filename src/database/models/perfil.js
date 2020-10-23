'use strict';

module.exports = (sequelize, DataTypes) => {
    const Perfil = sequelize.define('Perfil', {
        descricao: DataTypes.STRING,
        ativo: DataTypes.BOOLEAN
    }, {
        freezeTableName: true,
        tableName: 'perfil'
    });

    Perfil.associate = function (models) {
        Perfil.hasMany(models.Usuario, { as: 'usuarios', foreignKey: 'perfil_id' })
    };

    return Perfil;
};