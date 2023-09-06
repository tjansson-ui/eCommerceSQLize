const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    // find all tags
    const allTags = await Tag.findAll({
      // be sure to include its associated Product data
      include: [Product]
    })
    res.json(allTags)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  try{
    const tag = await Tag.findOne({
      // find a single tag by its `id`
      where: {
        id: req.params.id
      },
      // be sure to include its associated Product data
      include: [Product]
    })
    res.json(tag)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  try {
    // create a new tag
    const newTag = await Tag.create(req.body)
    res.json(newTag)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  try{
    await ProductTag.destroy({
      // update a tag's name by its `id` value
      where: {
        tag_id: req.params.id
      }
    })
    const productIDs = req.body.products
    for (const productID of productIDs) {
      await ProductTag.create({
        product_id: productID,
        tag_id: req.params.id
      })
    }
    const updatedTag = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json(updatedTag)
  } catch(err) {
    res.status(500).json(err)
    console.log(err)
  }
});

router.delete('/:id', async (req, res) => { 
  try {
    // delete on tag by its `id` value
    const delTag = await Tag.destroy({
      where: {
        id: req.params.id
      }
    })
    res.json(delTag)
  } catch(err) {
    res.status(500).json(err)
  }
});

module.exports = router;
