const router = require('express').Router();
const { Crystal, User } = require('../../models');

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

module.exports = Crystal; 