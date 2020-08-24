const validator = require("./validator");
const {check} = require('express-validator/check')
class RegisterValidator extends validator{
    handle(){
        return [
            check('email')
                .isEmail()
                .withMessage('the email field is not correct'),
            check('password')
                .isLength({min:8})
                .withMessage('the password field is not correct'),
            check('name')
             .not().isEmpty()
        ]
    }
}


module.exports = new RegisterValidator();