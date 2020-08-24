const express = require('express');
const router = express.Router();

const Category = require('./../../models/category');
const Post = require('./../../models/post');

const homeController = require('./../../http/controllers/homeController')
const loginController = require('./../../http/controllers/auth/loginController');
const registerController = require('../../http/controllers/auth/registerController');

const loginValidator = require('../../http/validators/loginValidator');
const registerValidator = require('../../http/validators/registerValidator');

router.get('/',homeController.index);
router.get('/categories/:categoryName',homeController.CategoryHandle);
router.get('/search',homeController.SearchHandle);
router.get('/post/:postName',homeController.PostShow);

//login route
router.get('/login',loginController.index);
router.post('/login',loginValidator.handle(),loginController.loginProcess);

//register route
router.get('/register',registerController.index);
router.post('/register',registerValidator.handle(),registerController.registerProcess);

module.exports = router;