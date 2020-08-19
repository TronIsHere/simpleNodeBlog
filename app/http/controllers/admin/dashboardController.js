
const Controller = require('./../Controller');

class dashboardController extends Controller{
    index(req, res){
        res.render('admin/index');
    }
}
module.exports = new dashboardController();