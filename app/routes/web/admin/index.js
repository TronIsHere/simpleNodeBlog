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
router.get('/dashboard/posts/add', (req, res) => {
        res.render('admin/newPost');
});
router.post('/dashboard/posts/add', (req, res) => {
        let newPost = new Post({
            title:req.body.title,
            content:req.body.content,
            slug:req.body.slug,
            img:'https://roocket.ir/public/image/2018/1/21/1516505980bootstrap4-cover-1.jpg'
        });
        newPost.save((err)=>{
            if(err) throw(err);
            res.redirect('/admin/dashboard/posts')
        })
});

module.exports = router;