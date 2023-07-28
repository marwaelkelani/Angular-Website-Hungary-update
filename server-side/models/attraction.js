const Sequelize = require('sequelize');
const config = require('../config');

let Attraction = config.define('attraction', {
    attraction_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false, 
        primaryKey: true
    },
    city_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
    }, 
    attraction_name : {
        type: Sequelize.STRING,
        allowNull: false,
    }

}, {timestamps: false});

module.exports = Attraction;