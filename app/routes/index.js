const express = require('express');
const router = express.Router();

const webRoute = require('./web');
router.use('/' , webRoute);
module.exports = router;