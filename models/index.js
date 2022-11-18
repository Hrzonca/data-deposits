const User = require('./User');
const Crystal = require('./Crystal');
const Category = require('./Category');

Crystal.belongsTo(Category, {
    foreignKey: 'category_id'
});

Category.hasMany(Crystal, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Crystal, Category };