const router = require('express').Router();
const userRoutes = require('./userRoutes');
const crystalRoutes = require('./crystalRoutes');

router.use('/users', userRoutes);
router.use('/crystals', crystalRoutes);

module.exports = router;
