const path = require('path');
const session = require('express-session');
const mongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
module.exports= {
    port : process.env.PORT,
    secret : process.env.SECRET_KEY,
    session:{
        secret:process.env.SESSION_SECRETKEY,
        resave:true,
        saveUninitialized:true,
        cookie:{expires:new Date(Date.now() + 1000 * 60 * 60 * 6)},
    },
    path : {
        controllers : {
            api : path.resolve('./app/controllers')
        },
        models : path.resolve('./app/models')
    }
}