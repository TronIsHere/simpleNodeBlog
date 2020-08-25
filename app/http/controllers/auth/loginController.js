const Category = require('./../../../models/category');
const Post = require('./../../../models/post');
const Controller = require('./../Controller');
const User = require('./../../../models/user');
const { use } = require('passport');

class LoginController extends Controller{
    index(req, res){
         res.render('auth/login',{error:req.flash('error')})
    }
    async loginProcess(req,res){
       let result = await this.ValidationData(req);
       console.log(result);
       if(result){
           return this.login(req,res);
       }
       return res.redirect('/login');
    }
    login(req,res){
        User.findOne({email:req.body.email},(err,user)=>{
            if(err) throw err;
            if(req.body.password == user.password){
                return res.redirect('/');
            }
            
        });
    }
}
module.exports = new LoginController();