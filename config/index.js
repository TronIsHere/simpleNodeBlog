const path = require('path')
module.exports= {
    port : 3000,
    secret:'ha@#%KDCLKSLDEW12f_=sa(QLEqwkdq1«3590jas73bc!@^%K(KDCL!@{!}{^',
    path : {
        controllers : {
            api : path.resolve('./app/controllers')
        },
        models : path.resolve('./app/models')
    }
}