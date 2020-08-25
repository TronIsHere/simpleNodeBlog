const Category = require('./../../../models/category');
const Post = require('./../../../models/post');
const Controller = require('./../Controller');
const User = require('./../../../models/user');
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
        let newuser = new User({
            name : req.body.name,
            email:req.body.email,
            password:req.body.password,
            admin:false
        });

        newuser.save(err=>{
            if(err) return req.flash('errors','there is a problem in process please try again later');
            res.redirect('/login');
        });
    }
}
module.exports = new RegisterController();