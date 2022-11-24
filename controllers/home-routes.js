const router = require('express').Router();
const { Crystal } = require('../models');


router.get('/', async (req, res) => {
  try {
    const common = await Crystal.findAll({
      include: [
        {model: Crystal}
      ]
    });
    res.status(200).json(common);
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