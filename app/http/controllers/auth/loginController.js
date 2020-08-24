const Category = require('./../../../models/category');
const Post = require('./../../../models/post');
const Controller = require('./../Controller');

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
        res.json(req.body);
    }
}
module.exports = new LoginController();