const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Listing extends Model {

}

Listing.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        image:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bedroom: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        bathroom: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },
    {


        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'listing',
    }
);

module.exports = Listing;
