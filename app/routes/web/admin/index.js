const express = require('express');
const router = express.Router();
const Category = require('./../../../models/category');
const Post = require('./../../../models/post');
const multer = require('multer');
const dashboardController = require('./../../../http/controllers/admin/dashboardController')

router.get('/dashboard',dashboardController.index);
router.get('/dashboard/posts',dashboardController.getPosts);
router.get('/dashboard/categories',dashboardController.getCategories);
router.get('/dashboard/categories/add',dashboardController.ShowAddCategories);
router.post('/dashboard/categories/add', dashboardController.SaveAddCategories);
router.get('/dashboard/categories/delete/:id',dashboardController.DeleteCategories);
router.get('/dashboard/posts/add', dashboardController.ShowPostAdd);
router.post('/dashboard/posts/add',dashboardController.SavePostAdd); 
router.get('/dashboard/posts/delete/:id',dashboardController.DeletePost);
module.exports = router;