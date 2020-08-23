const Category = require('./../../../models/category');
const Post = require('./../../../models/post');
const Controller = require('./../Controller');

class RegisterController extends Controller{
    index(req, res){
         res.render('auth/register')
    }
    registerProcess(req,res){
        res.json(req.body);
    }
}
module.exports = new RegisterController();