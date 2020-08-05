const express = require('express');
const router = express.Router();
const Category = require('./../../models/category');
const Post = require('./../../models/post');

router.get('/', (req, res) => {
    Post.find({}).populate('category').exec((err,post)=>{
        if(err) throw err;
        res.json(post)
    });
});
router.get('/categories/:categoryName', (req, res) => {
    Category.find({categoryName:req.params.categoryName}).populate('posts').exec((err,post)=>{
        if(err) throw err;
        Category.find({},(err,categories)=>{
            if(err) throw err;
            return res.json(post)
        })
        // res.json(post[0].posts);
    })
});
router.get('/post/:postName', (req, res) => {
    Post.findOne({slug:req.params.postName},(err,content)=>{
        if(err) throw err;
        return res.json(content);
    })
});
router.post('/search',async (req,res)=>{
    let searchValue = req.body.search;
    console.log(searchValue)
    // let t = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis aspernatur, hic, quidem tempora obcaecati, eos numquam mollitia quibusdam iusto harum doloribus quia expedita odio. Iure ratione amet quae fugiat commodi.';
    let query= {};
    query.title = new RegExp(searchValue,'gi');
    Post.find({...query},(err,post)=>{
        if(err) throw err;
        return res.json(post)
    })
});

module.exports = router;