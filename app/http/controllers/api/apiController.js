const Category = require('./../../../models/category');
const Post = require('./../../../models/post');
const Controller = require('./../Controller');

class ApiController extends Controller{
    index(req, res){
        Post.find({}).populate('category').exec((err,post)=>{
            if(err) throw err;
            res.json(post)
        });
    }
    ShowSpecificCategory(req,res){
        Category.find({categoryName:req.params.categoryName}).populate('posts').exec((err,post)=>{
            if(err) throw err;
            Category.find({},(err,categories)=>{
                if(err) throw err;
                return res.json(post)
            })
            
        })
    }
    ShowSpecifyPost(req,res){
        Post.findOne({slug:req.params.postName},(err,content)=>{
            if(err) throw err;
            return res.json(content);
        })
    }
    async Search(req,res){
        let searchValue = req.body.search;
        let query= {};
        query.title = new RegExp(searchValue,'gi');
        Post.find({...query},(err,post)=>{
            if(err) throw err;
            return res.json(post)
        })
    }

}
module.exports = new ApiController();