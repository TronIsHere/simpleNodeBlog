const autoBind = require('auto-bind');
const { validationResult } = require('express-validator/check');
class Controller{
    constructor(){
        autoBind(this);
    }
    async ValidationData(req,res){
        const result = validationResult(req);
        if(!result.isEmpty()){
            const errors = result.array();
            const messages = [];
            
            errors.forEach(err => messages.push(err.msg));
         
            req.flash('error','input is invalid please correct the input');
            return false;
        }
        return true
    }
}

module.exports = Controller;