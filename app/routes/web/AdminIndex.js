const express = require('express');
const router = express.Router();
const Category = require('./../../models/category');
const Post = require('./../../models/post');
const multer = require('multer');
var globalname;
// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null,'/projects/Websites/simpleBlog/assets/img')
//     },
//     filename: function (req, file, cb) {
//         var extention;
//         if (file.originalname.indexOf('.jpg') >= 0) {
//             extention = file.originalname.indexOf('.jpg');
//         } else if (file.originalname.indexOf('.png') >= 0) {
//             extention = file.originalname.indexOf('.png');
//         } else if (file.originalname.indexOf('.gif') >= 0) {
//             extention = file.originalname.indexOf('.gif');
//         }
//         if (extention) {
//             var zoom = file.originalname.substr(extention, extention + 3);
//             var filename = file.originalname.substr(0, extention);
//             globalname = filename + "-" + Date.now() + "-" + file.originalname.substr(extention, extention + 3);
//         }
//         cb(null, filename + "-" + Date.now() + "-" + file.originalname.substr(extention, extention + 3));
//     }
// });
// var upload = multer({
//     storage: storage
// });
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
router.get('/dashboard/categories', (req, res) => {
    Category.find({},(err,item)=>{
        if(err) throw err;
        return res.render('admin/categories',{
            categories:item
        });
    })
});
router.get('/dashboard/categories/add', (req, res) => {
    res.render('admin/newCategory');
});
router.post('/dashboard/categories/add', (req, res) => {
    let newCategory = new Category({
        categoryName:req.body.name
    });
    newCategory.save((err)=>{
        if(err) throw(err);
        res.redirect('/admin/dashboard/categories')
    })
});
router.get('/dashboard/categories/delete/:id', (req, res) => {
    let id = req.params.id;
    Category.findByIdAndRemove(id, function (err, post) {
        if (err) throw err;
        res.redirect('/admin/dashboard/categories')
    });
});
router.get('/dashboard/posts/add', (req, res) => {
        Category.find({},(err,item)=>{
            if(err) throw err;
            return res.render('admin/newPost',{
                categories:item
            });
        })
});
router.post('/dashboard/posts/add', (req, res) => { //deleted upload.single('ImageFile') because in localhost we cant use local image like in the online sites
        console.log(req.body.title);
        console.log(req.body.selectCat);
        let category = Category.findById(req.body.selectCat,(err,item)=>{
            console.log(item)
        let newPost = new Post({
            title:req.body.title,
            content:req.body.content,
            slug:req.body.slug,
            img:req.body.imageUrl,
            category:req.body.selectCat
        });
        newPost.save((err)=>{
            if(err) throw(err);
            item.posts.push(newPost._id);
            item.save();
            res.redirect('/admin/dashboard/posts')
        });
    });
});
router.get('/dashboard/posts/delete/:id', (req, res) => {
        let id = req.params.id;
        Post.findByIdAndRemove(id, function (err, post) {
            if (err) throw err;
            res.redirect('/admin/dashboard/posts')
        });
});
module.exports = router;