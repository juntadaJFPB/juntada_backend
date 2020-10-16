'use strict';

module.exports = (sequelize, DataTypes) => {
    const Relatorio_erros = sequelize.define('Relatorio_erros', {
        descricao: DataTypes.STRING,
        numero_processo: DataTypes.STRING,
        data_hora: DataTypes.STRING,
        data_correspondencia: DataTypes.STRING,
    
    }, {
        freezeTableName: true,
        tableName: 'relatorio_erros'
    });

    // Relatorio_erros.associate = function (models) {
    //     Relatorio_erros.belongsTo(models.Correspondencia, { as: 'correspondencia', foreignKey: 'correspondencia_id' })
    // };

    return Relatorio_erros;
};