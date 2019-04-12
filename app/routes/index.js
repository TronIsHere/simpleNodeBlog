const express = require('express');
const router = express.Router();

const webRoute = require('./web');
const AdminwebRoute = require('./web/admin');
router.use('/' , webRoute);
router.use('/admin' , AdminwebRoute);
module.exports = router;