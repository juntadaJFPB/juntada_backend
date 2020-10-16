'use strict';

module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        nome: DataTypes.STRING,
        usuario: DataTypes.STRING,
        perfil: DataTypes.STRING,
        setor_id: DataTypes.INTEGER,
        papel_id: DataTypes.INTEGER,
        ativo: DataTypes.BOOLEAN
    }, {
        freezeTableName: true,
        tableName: 'usuarios'
    });

    Usuario.associate = function (models) {
        Usuario.belongsTo(models.Setor, { as: 'setor', foreignKey: 'setor_id' })
        Usuario.belongsTo(models.UsuarioPapel, { as: 'papel', foreignKey: 'papel_id' })
        Usuario.hasMany(models.Correspondencia, {as: 'correspondencia', foreignKey: 'id'})
    };

    return Usuario;
};