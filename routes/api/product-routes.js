const router = require('express').Router();
const {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../../controllers/productController');

// /api/products
router.route('/').get(getProducts)
router.route('/').get(getProducts).post(createProduct);

// /api/products:id
router
 .route('/:id')
 .get(getSingleProduct)
 .put(updateProduct)
 .delete(deleteProduct);

module.exports = router;