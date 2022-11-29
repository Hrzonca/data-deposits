const User = require('./User');
const Crystal = require('./Crystal');
const Category = require('./Category');

Category.hasMany(Crystal, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});

Crystal.belongsTo(Category, {
    foreignKey: 'category_id'
});

User.hasMany(Crystal, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Crystal.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Crystal, Category };