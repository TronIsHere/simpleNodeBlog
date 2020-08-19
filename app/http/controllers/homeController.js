const Category = require('./../../models/category');
const Post = require('./../../models/post');
const Controller = require('./Controller');

class HomeController extends Controller{
    index(req, res){
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
    }
    CategoryHandle(req, res){
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
    }
    async SearchHandle(req, res){
        let searchValue = req.body.search;
        // let t = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis aspernatur, hic, quidem tempora obcaecati, eos numquam mollitia quibusdam iusto harum doloribus quia expedita odio. Iure ratione amet quae fugiat commodi.';
        let query= {};
        query.title = new RegExp(req.query.search,'gi');
        Post.find({...query},(err,post)=>{
            if(err) throw err;
            Category.find({},(err,categories)=>{
                if(err) throw err;
                return res.render('home',{
                    categories:categories,
                    posts:post.reverse()
                });
            })
        })
    }
    PostShow(req, res){
        Post.findOne({slug:req.params.postName},(err,content)=>{
            if(err) throw err;
            return res.render('post',{
                post:content
            });
        })
    }
}
module.exports = new HomeController();