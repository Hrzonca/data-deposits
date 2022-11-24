const router = require('express').Router();
const { Category, Crystal } = require('../../models');

//find all categories
router.get('/', async (req, res) => {
    try {
        const categoryData = await Category.create({
            name: req.body.name,
        });

        res.status(200).json(categoryData);
    
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//find a single category
router.get('/:id', async (req, res) => {
    try {
      const categoryData = await Category.findByPk(req.params.id,
        {
          include: [{
            model: Crystal
          }],
        });
  
        if (!categoryData) {
          res.status(404).json({
            message: 'No category found with that id' });
            return;
        }
        res.status(200).json(categoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// module.exports = router;
