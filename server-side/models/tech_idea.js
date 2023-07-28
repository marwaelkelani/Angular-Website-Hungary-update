const Sequelize = require('sequelize');
const config = require('../config');

let TechIdea = config.define('tech idea', {
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
    age : {
        type: Sequelize.STRING,
        allowNull: true,
    }, 

    email : {
        type: Sequelize.STRING,
        allowNull: false,
    },
    target_city: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tech_idea: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {timestamps: false});

module.exports = TechIdea;