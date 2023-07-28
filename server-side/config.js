//Link Sequelize to database

const Sequelize = require('sequelize');

let database = 'Hungary';
let username = 'marwa';
let password = 'password';

let config = new Sequelize(database, username, password, {dialect: 'mariadb'});

module.exports = config;