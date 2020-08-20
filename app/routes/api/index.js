const express = require('express');
const router = express.Router();
const Category = require('./../../models/category');
const Post = require('./../../models/post');
const ApiController = require('./../../http/controllers/api/apiController')

router.get('/',ApiController.index);
router.get('/categories/:categoryName',ApiController.ShowSpecificCategory);
router.get('/post/:postName',ApiController.ShowSpecifyPost);
router.post('/search',ApiController.Search);

module.exports = router;