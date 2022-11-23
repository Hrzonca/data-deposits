const sequelize = require('../config/connection');
const { User, Crystal, Category } = require('../models');

const userData = require('./');
const crystalData = require('./');
const categoryData = require('./');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        
    });

    for (const)
}

seedDatabase();