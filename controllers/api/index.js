const router = require('express').Router();
const userRoutes = require('./userRoutes');
const crystalRoutes = require('./crystalRoutes');
<<<<<<< HEAD

router.use('/users', userRoutes);
router.use('/crystals', crystalRoutes);

=======
// const categoryRoutes = require('./categoryRoutes');

router.use('/users', userRoutes);
router.use('/crystals', crystalRoutes);
// router.use('/categories', categoryRoutes);
>>>>>>> main


module.exports = router;
