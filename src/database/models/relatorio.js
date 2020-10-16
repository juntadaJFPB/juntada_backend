'use strict';

module.exports = (sequelize, DataTypes) => {
    const Relatorio = sequelize.define('Relatorio', {
        descricao: DataTypes.STRING,
        numero_juntadas: DataTypes.INTEGER,
        // correspondencia_id: DataTypes.INTEGER,
        usuario_id: DataTypes.INTEGER
    }, {
        freezeTableName: true,
        tableName: 'relatorio'
    });

    Relatorio.associate = function (models) {
        // Relatorio.belongsTo(models.Correspondencia, { as: 'correspondencia', foreignKey: 'correspondencia_id' })
        //    Relatorio.hasMany(models.Correspondencia, { as: 'correspondencia', foreignKey: 'id'})
        Relatorio.belongsTo(models.Usuario, { as: 'usuarios', foreignKey: 'usuario_id' })
    };

    return Relatorio;
};