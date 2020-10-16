'use strict';

module.exports = (sequelize, DataTypes) => {
    const Correspondencia = sequelize.define('Correspondencia', {
        numero_processo: DataTypes.STRING,
        destinatario: DataTypes.STRING,
        data: DataTypes.STRING,
        status: DataTypes.ENUM('Upado', 'Nao Upado'),
        status_bot: DataTypes.ENUM('Nao Houve Tentativa', 'Houve Tentativa', 'Sucesso'),
        usuario_id: DataTypes.INTEGER,
    }, {
        freezeTableName: true,
        tableName: 'correspondencia'
    });

    Correspondencia.associate = function (models) {
        Correspondencia.belongsTo(models.Usuario, { as: 'usuarios', foreignKey: 'usuario_id' })
        Correspondencia.hasMany(models.Anexo, {as: 'anexo', foreignKey: 'correspondencia_id'})
        // Correspondencia.hasMany(models.Relatorio, {as: 'relatorio', foreignKey: 'id'})
        // Correspondencia.belongsTo(models.Relatorio, {as: 'relatorio', foreignKey: 'id'})
       

    };

    return Correspondencia;
};