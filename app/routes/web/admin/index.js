const express = require('express');
const router = express.Router();
const Post = require('../../../models/post');

router.get('/dashboard', (req, res) => {
     res.render('admin/index');
});
router.get('/dashboard/posts', (req, res) => {
    Post.find({},(err,post)=>{
        if(err) throw err;
        return res.render('admin/posts',{
            posts:post
        });
    })
});

module.exports = router;