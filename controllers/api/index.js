const router = require('express').Router();
const userRoutes = require('./userRoutes');
const commonRoutes = require('./commonCrystalRoutes')
const crystalRoutes = require('./rareCrystalsRoutes');

router.use('/users', userRoutes);
router.use('/commoncrystals', commonRoutes)
router.use('/rarecrystals', crystalRoutes);

module.exports = router;
