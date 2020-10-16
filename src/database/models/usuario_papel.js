'use strict';

module.exports = (sequelize, DataTypes) => {
    const UsuarioPapel = sequelize.define('UsuarioPapel', {
        descricao: DataTypes.STRING,
        ativo: DataTypes.BOOLEAN
    }, {
        freezeTableName: true,
        tableName: 'usuario_papel'
    });

    UsuarioPapel.associate = function (models) {
        UsuarioPapel.hasMany(models.Usuario, { as: 'usuarios', foreignKey: 'papel_id' })
    };

    return UsuarioPapel;
};