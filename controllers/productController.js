const { Product, Tag, Category } = require('../models');

module.exports = {
    // GET all products
    async getProducts(req, res) {
        try {
            const products = await Product.findAll({
              include: [{model: Category}, { model: Tag }],
            });
            res.json(products);
          } catch (err) {
            console.error(err);
            res.status(500).json(err);
          }
    },
    
    // GET a single product
    async getSingleProduct(req, res) {
        try {
            const category = await Product.findOne({
                where: { id: req.params.id },
                // include: Product,
            });
            res.json(category);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    
    // POST a new product
    async createProduct(req, res) {
        try {
            const newProduct = await Product.create(req.body);
            res.json(newProduct);
          } catch (err) {
            console.error(err);
            res.status(400).json(err);
          }
    },
    
    // PUT update a category by ID
    async updateProduct(req, res) {
        try {
            const updatedProduct = await Product.update(req.body, {
              where: {
                id: req.params.id,
              },
            });
            res.json(updatedProduct);
          } catch (err) {
            console.error(err);
            res.status(400).json(err);
          }
    },
    
    // DELETE a product by ID
    async deleteProduct(req, res) {
        try {
            const deletedProduct = await Product.destroy({
              where: {
                id: req.params.id,
              },
            });
            res.json(deletedProduct);
          } catch (err) {
            console.error(err);
            res.status(500).json(err);
          }
        }
    };