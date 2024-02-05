const { Category, Product } = require('../models');

module.exports = {
// GET all categories
async getCategories(req, res) {
    try {
        const categories = await Category.findAll({
          include: Product,
        });
        res.json(categories);
      } catch (err) {
        console.error(err);
        res.status(500).json(err);
      }
},

// GET a single category
async getSingleCategory(req, res) {
    try {
        const category = await Category.findOne({
            where: { id: req.params.id },
            include: Product,
        });
        res.json(category);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
},

// POST a new category
async createCategory(req, res) {
    try {
        const newCategory = await Category.create(req.body);
        res.json(newCategory);
      } catch (err) {
        console.error(err);
        res.status(400).json(err);
      }
},

// PUT update a category by ID
async updateCategory(req, res) {
    try {
        const updatedCategory = await Category.update(req.body, {
          where: {
            id: req.params.id,
          },
        });
        res.json(updatedCategory);
      } catch (err) {
        console.error(err);
        res.status(400).json(err);
      }
},

// DELETE a category by ID
async deleteCategory(req, res) {
    try {
        const deletedCategory = await Category.destroy({
          where: {
            id: req.params.id,
          },
        });
        res.json(deletedCategory);
      } catch (err) {
        console.error(err);
        res.status(500).json(err);
      }
    }
};