const router = require('express').Router();
const { Crystal, User } = require('../../models');
const withAuth = require('../../utils/auth');
router.get('/', async (req, res) => {
  try {
    const crystalData = await Crystal.findAll(req.body);
    res.render("homepage", {
      crystalData,
    })
    res.status(200).json(crystalData);
  } catch (err) {
    res.status(400).json(err);
  }
});
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

router.get('/crystal/images/:image', async (req, res) => {
  try {
    const image = await Crystal.findByPk(req.body);

    res.render('crystal', {
      image
    });

  }catch (err) {
    res.status(500).json(err);
  }
})

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const crystalData = await Crystal.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!crystalData) {
      res.status(404).json({ message: 'No crystal found with this id!' });
      return;
    }

    res.status(200).json(crystalData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;  