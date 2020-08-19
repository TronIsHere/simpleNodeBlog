const express = require('express');
const router = express.Router();



const apiRouter = require('./api');
const homeRouter = require('./web');

router.use('/api',apiRouter);
router.use('/',homeRouter);

module.exports = router;