const express = require('express');
const router = express.Router();
const Category = require('./../../models/category');
const Post = require('./../../models/post');
const homeController = require('./../../http/controllers/homeController')

router.get('/',homeController.index);
router.get('/categories/:categoryName',homeController.CategoryHandle);
router.get('/search',homeController.SearchHandle);
router.get('/post/:postName',homeController.PostShow);

module.exports = router;