
const Controller = require('./../Controller');

class dashboardController extends Controller{
    index(req, res){
        res.render('admin/index');
    }
    getCategories(req,res){
        Category.find({},(err,item)=>{
            if(err) throw err;
            return res.render('admin/categories',{
                categories:item
            });
        })
    }
    ShowAddCategories(req,res){
        res.render('admin/newCategory');
    }
    SaveAddCategories(req,res){
        let newCategory = new Category({
            categoryName:req.body.name
        });
        newCategory.save((err)=>{
            if(err) throw(err);
            res.redirect('/admin/dashboard/categories')
        })
    }
    DeleteCategories(req,res){
        let id = req.params.id;
        Category.findByIdAndRemove(id, function (err, post) {
            if (err) throw err;
            res.redirect('/admin/dashboard/categories')
        });
    }
    getPosts(req,res){
        Post.find({},(err,post)=>{
            if(err) throw err;
            return res.render('admin/posts',{
                posts:post
            });
        })
    }
    ShowPostAdd(req,res){
        Category.find({},(err,item)=>{
            if(err) throw err;
            return res.render('admin/newPost',{
                categories:item
            });
        })
    }
    SavePostAdd(req,res){
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
    }
    DeletePost(req,res){
        let id = req.params.id;
        Post.findByIdAndRemove(id, function (err, post) {
            if (err) throw err;
            res.redirect('/admin/dashboard/posts')
        });
    }
}
module.exports = new dashboardController();