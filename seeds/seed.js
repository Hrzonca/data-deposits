const sequelize = require('../config/connection');
const { User, Crystal, Category } = require('../models');

const userData = require('./userDate.json');
const crystalData = require('./crystalSeedData.json');
const categoryData = require('./categorData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    await Category.bulkCreate(categoryData, {
        individualHooks: true,
        returning: true,
    });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const crystal of crystalData) {
        await Crystal.create({
            ...crystal,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }
    process.exit(0);
}

seedDatabase();