const { Tag, Product, ProductTag } = require('../models');

module.exports = {
    // GET all tags
    async getTags(req, res) {
        try {
            const tags = await Tag.findAll({
              include: { model: Product, through: ProductTag },
            });
            res.json(tags);
          } catch (err) {
            console.error(err);
            res.status(500).json(err);
          }
    },
    
    // GET a single tag
    async getSingleTag(req, res) {
        try {
            const category = await Tag.findOne({
                where: { id: req.params.id },
                include: Product,
            });
            res.json(category);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    
    // POST a new tag
    async createTag(req, res) {
        try {
            const newTag = await Tag.create(req.body);
            res.json(newTag);
          } catch (err) {
            console.error(err);
            res.status(400).json(err);
          }
    },
    
    // PUT update a tag by ID
    async updateTag(req, res) {
        try {
            const updatedTag = await Tag.update(req.body, {
              where: {
                id: req.params.id,
              },
            });
            res.json(updatedTag);
          } catch (err) {
            console.error(err);
            res.status(400).json(err);
          }
    },
    
    // DELETE a tag by ID
    async deleteTag(req, res) {
        try {
            const deletedTag = await Tag.destroy({
              where: {
                id: req.params.id,
              },
            });
            res.json(deletedTag);
          } catch (err) {
            console.error(err);
            res.status(500).json(err);
          }
        }
    };