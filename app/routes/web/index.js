const express = require('express');
const router = express.Router();
const Category = require('./../../models/category');
const Post = require('./../../models/post');

router.get('/', (req, res) => {
    Post.find({},(err,post)=>{
        if(err) throw err;
        Category.find({},(err,categories)=>{
            if(err) throw err;
            return res.render('home',{
                categories:categories,
                posts:post.reverse()
            });
        })
    })
});
router.get('/categories/:categoryName', (req, res) => {
    Category.find({categoryName:req.params.categoryName}).populate('posts').exec((err,post)=>{
        if(err) throw err;
        Category.find({},(err,categories)=>{
            if(err) throw err;
            return res.render('home',{
                categories:categories,
                posts:post[0].posts.reverse()
            });
        })
        // res.json(post[0].posts);
    })
});
router.get('/post/:postName', (req, res) => {
    Post.findOne({slug:req.params.postName},(err,content)=>{

        if(err) throw err;
        return res.render('post',{
            post:content
        });
    })
});

module.exports = router;