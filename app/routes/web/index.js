const express = require('express');
const router = express.Router();
const Post = require('../../models/post');

router.get('/', (req, res) => {
    Post.find({},(err,post)=>{
        if(err) throw err;
        return res.render('home',{
            posts:post
        });
    })
   
});
router.get('/save', (req, res) => {
    let newPost = new Post({
        title:'this is a test',
        content : `Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.
        Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
        Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.`,
        slug:'this-is-a-test',
        img:'https://roocket.ir/public/images/2018/4/10/nodejs-2.png'
    });
    newPost.save((err)=>{
        if(err) throw(err);
        res.send('Saved!');
    })
});
router.get('/post/:postName', (req, res) => {
    return res.render('post');
});

module.exports = router;