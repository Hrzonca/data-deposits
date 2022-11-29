const router = require('express').Router();
const { Crystal, Category, User } = require('../models');
const withAuth = require('../utils/auth');

//render all common crystals on home page WORKS
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
    // res.status(200).json(renderCrystals);
    res.render('homepage', {
      renderCrystals,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Crystal }],
    });

    const user = userData.get();

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Where should i direct it to?
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

router.get

  module.exports = router;