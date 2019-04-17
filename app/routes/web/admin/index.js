const express = require('express');
const router = express.Router();
const Post = require('../../../models/post');
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
router.get('/dashboard/posts/add', (req, res) => {
        res.render('admin/newPost');
});
router.post('/dashboard/posts/add', (req, res) => { //deleted upload.single('ImageFile') because in localhost we cant use local image like in the online sites
        console.log(req.body.title);
        console.log(req.body.imageUrl);
        let newPost = new Post({
            title:req.body.title,
            content:req.body.content,
            slug:req.body.slug,
            img:req.body.imageUrl
        });
        newPost.save((err)=>{
            if(err) throw(err);
            res.redirect('/admin/dashboard/posts')
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