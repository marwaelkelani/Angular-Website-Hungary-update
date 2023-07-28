const Sequelize = require('sequelize');
const config = require('../config');

let Weather = config.define('weather', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false, 
        primaryKey: true
    },
    name : {
        type: Sequelize.STRING,
        allowNull: false,
    }, 
    springN : {
        type: Sequelize.INTEGER,
        allowNull: false,
    }, 
    springM : {
        type: Sequelize.INTEGER,
        allowNull: false,
    }, 
    summerN : {
        type: Sequelize.INTEGER,
        allowNull: false,
    }, 
    summerM : {
        type: Sequelize.INTEGER,
        allowNull: false,
    }, 
    winterN : {
        type: Sequelize.INTEGER,
        allowNull: false,
    }, 
    winterM : {
        type: Sequelize.INTEGER,
        allowNull: false,
    }, 
    autumnN : {
        type: Sequelize.INTEGER,
        allowNull: false,
    }, 
    autumnM : {
        type: Sequelize.INTEGER,
        allowNull: false,
    }, 
    visitFrom : {
        type: Sequelize.STRING,
        allowNull: false,
    }, 
    visitTo : {
        type: Sequelize.STRING,
        allowNull: false,
    }, 
   
}, {timestamps: false});

module.exports = Weather;