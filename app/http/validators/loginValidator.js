const validator = require("./validator");
const {check} = require('express-validator/check')
class LoginValidator extends validator{
    handle(){
        return [
            check('email')
                .isEmail()
                .withMessage('the email field is not correct'),
            check('password')
                .isLength({min:8})
                .withMessage('the password field is not correct')
        ]
    }
}


module.exports = new LoginValidator();