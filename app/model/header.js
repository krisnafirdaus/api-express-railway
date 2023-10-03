const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Header = sequelize.define('Header', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    }
});

module.exports = Header
