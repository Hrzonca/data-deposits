const router = require('express').Router();
const { Crystal, Category } = require('../models');


router.get('/', async (req, res) => {
  try {
    const common = await Crystal.findAll({
      include: [
        {
        model: Category,
        attributes: ['category_name'] 
        }
      ]
    });

    const renderCrystals = common.map((crystal) => crystal.get({ plain: true }));
    
    res.render('homepage', {
      renderCrystals,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
})


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

  module.exports = router;