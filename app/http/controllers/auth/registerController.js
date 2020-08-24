const Category = require('./../../../models/category');
const Post = require('./../../../models/post');
const Controller = require('./../Controller');

class RegisterController extends Controller{
    index(req, res){
         res.render('auth/register',{error:req.flash('error')})
    }
    async registerProcess(req,res){
        let result = await this.ValidationData(req);
        console.log(result);
        if(result){
            return this.register(req,res);
        }
        return res.redirect('/register');
    }
    register(req,res){
        res.json(req.body);
    }
}
module.exports = new RegisterController();