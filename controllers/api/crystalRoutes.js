const router = require('express').Router();
const { Crystal, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Crystal.create({
            ...req.body,
            user_id: req.session.user_id,
        });
    
        res.status(200).json(newPost);
      } catch (err) {
        res.status(400).json(err);
      } 
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!userData) {
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
})

//I dont think findbypk is correct. Should be finding the common crystals 
// router.get('/common', async (req, res) => {
//  try {
//     const crystalData = await Category.findByPk(req.params.body, {
//         include: [
//             { model: Category }
//         ]
//     });

//     res.status(200).json(crystalData);
// } catch (err) {
//   res.status(400).json(err);
// }
// });

// //should be finding rare crystals 
// router.get('/rare', withAuth, async (req, res) => {
//     try {
//         const crystalData = await Category.findByPk(req.params.id,
//             {
//                 include: [{ model: Crystal }],   
//             });

//             const rare = crystalData.get({ plain: true });

//             res.render('profile', {
//                 ...rare,
//                 logged_in: true
//               });
//             } catch (err) {
//               res.status(500).redirect('/login');
//               return;
//             }
//             res.render('login');
        
// });


module.exports = Crystal;  