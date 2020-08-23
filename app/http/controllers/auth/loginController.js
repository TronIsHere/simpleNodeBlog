const Category = require('./../../../models/category');
const Post = require('./../../../models/post');
const Controller = require('./../Controller');

class LoginController extends Controller{
    index(req, res){
         res.render('auth/login')
    }
    loginProcess(req,res){
        res.json(req.body)
    }
}
module.exports = new LoginController();