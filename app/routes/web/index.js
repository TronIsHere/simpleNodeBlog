const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.render('home');
});
router.get('/post/:postName', (req, res) => {
    return res.send('post');
});

module.exports = router;