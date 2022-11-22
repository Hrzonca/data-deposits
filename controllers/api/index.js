const router = require('express').Router();
const userRoutes = require('./userRoutes');
const crystalRoutes = require('./crystalRoutes');
// const categoryRoutes = require('./categoryRoutes');

router.use('/users', userRoutes);
router.use('/crystals', crystalRoutes);
// router.use('/categories', categoryRoutes);


module.exports = router;
