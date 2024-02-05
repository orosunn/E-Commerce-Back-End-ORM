const router = require('express').Router();
const {
  getTags,
  getSingleTag,
  createTag,
  updateTag,
  deleteTag
} = require('../../controllers/tagController');

// /api/tags
router.route('/').get(getTags)
router.route('/').get(getTags).post(createTag);

// /api/tags:id
router
 .route('/:id')
 .get(getSingleTag)
 .put(updateTag)
 .delete(deleteTag);

module.exports = router;