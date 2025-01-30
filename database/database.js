const Sequelize = require ("sequelize")

const sequelize = new Sequelize('sql8759404', 'sql8759404', 'XS7nPKNPFu', {
    host: 'sql8.freesqldatabase.com',
    dialect: 'mysql'
  });

  module.exports = sequelize
