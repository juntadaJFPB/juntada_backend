module.exports = {

    "development": {
        "host": "localhost",
        "username": "root",
        "password": "root",
        "database": "ars_backup",
        "migrationStorageTableName": "sequelize_meta",
        "dialect": "mysql",
        "operatorsAliases": 0,
        "timezone": "America/Recife",
        "logging": false,
        "define": {
            "underscored": true,
            "underscoredAll": true,
            "createdAt": "created_at",
            "updatedAt": "updated_at"
        }
    },

    "test": {
        "username": "root",
        "password": "admin",
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": 0
    },

    "production": {
        "host": process.env.DB_HOST,
        "username": process.env.DB_USERNAME,
        "password": process.env.DB_PASSWORD,
        "database": process.env.DB_SCHEMA,
        "migrationStorageTableName": "sequelize_meta",
        "dialect": "mysql",
        "operatorsAliases": 0,
        "timezone": "America/Recife",
        "use_env_variable": false,
        "logging": false,
        "define": {
            "underscored": true,
            "underscoredAll": true,
            "createdAt": "created_at",
            "updatedAt": "updated_at"
        }
    }

}