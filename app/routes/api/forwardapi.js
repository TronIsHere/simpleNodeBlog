const express = require('express');
const router = express.Router();
const apiRoute = require('./index');
router.use('/api' , apiRoute);
module.exports = router;