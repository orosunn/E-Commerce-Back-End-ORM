const router = require('express').Router();
const { 
  getCategories,
  getSingleCategory,
  createCategory,
  updateCategory,
  deleteCategory
 } = require('../../controllers/categoryController');

 // /api/categories
 router.route('/').get(getCategories)
 router.route('/').get(getCategories).post(createCategory);

 // /api/categories:id
 router
  .route('/:id')
  .get(getSingleCategory)
  .put(updateCategory)
  .delete(deleteCategory);

module.exports = router;