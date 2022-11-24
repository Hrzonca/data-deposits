const router = require('express').Router();
const { Category, Crystal, User } = require('../../models');
const withAuth = require('../utils/auth.js');

//I dont think findbypk is correct. Should be finding the common crystals 
router.get('/common', async (req, res) => {
 try {
    const crystalData = await Category.findByPk(req.params.body, {
        include: [
            { model: Category }
        ]
    });

    res.status(200).json(crystalData);
} catch (err) {
  res.status(400).json(err);
}
});

//should be finding rare crystals 
router.get('/rare', withAuth, async (req, res) => {
    try {
        const crystalData = await Category.findByPk(req.params.id,
            {
                include: [{ model: Crystal }],   
            });

            const rare = crystalData.get({ plain: true });

            res.render('profile', {
                ...rare,
                logged_in: true
              });
            } catch (err) {
              res.status(500).redirect('/login');
              return;
            }
            res.render('login');
        
});


module.exports = Crystal;  v