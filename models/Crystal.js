const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Crystal extends Model {}

Crystal.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                isDecimal: true 
            }
        },
        hardness: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,
                min: 1,
                max: 10
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modeName: 'crystal'
    }
);

module.exports = Crystal;