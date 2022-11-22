const router = require('express').Router();
const { User, Crystal } = require('../models');
const withAuth = require('../utils/auth.js');

//TODO: profile to make your own posts

//TODO: login page 
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

//This route is for people who have logged in and can see the rare crystals. Not sure what the endpoint should be. 
// Use withAuth middleware to prevent access to route
router.get('/Crystals', withAuth, async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model:  User, Crystal }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).redirect('/login');
      return;
    }
    res.render('login');
  });

  module.exports = router;