const Sequelize = require('sequelize');
const config = require('../config');

let Place = config.define('place', {
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
    city_id : {
        type: Sequelize.STRING,
        allowNull: false,
    }, 

    population : {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    imgURL: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {timestamps: false});

module.exports = Place;