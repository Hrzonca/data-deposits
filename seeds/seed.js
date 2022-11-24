const sequelize = require('../config/connection');
const { User, Crystal } = require('../models');

const userData = require('./');
const crystalData = require('./');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const crystal of crystalData) {
        await Crystal.create({
            ...crystal,
            user_id: user[Math.floor(Math.random() * users.length)].id,
        });
    }
    process.exit(0);
}

seedDatabase();