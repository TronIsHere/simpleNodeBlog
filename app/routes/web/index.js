const express = require('express');
const router = express.Router();
const Post = require('../../models/post');

router.get('/', (req, res) => {
    Post.find({},(err,post)=>{
        if(err) throw err;
        return res.render('home',{
            posts:post.reverse()
        });
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