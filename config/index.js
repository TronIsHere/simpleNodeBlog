const path = require('path');
module.exports= {
    port : process.env.PORT,
    secret : process.env.SECRET_KEY,
    path : {
        controllers : {
            api : path.resolve('./app/controllers')
        },
        models : path.resolve('./app/models')
    }
}