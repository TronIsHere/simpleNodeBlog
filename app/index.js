const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const mongoose = require('mongoose')
const path = require('path');
const flash = require('connect-flash');
const session = require('express-session');

module.exports = class Application {
    constructor(){

        this.setupExpress();
        this.setupMongodb();
        this.setConfig();
        this.setRoutes();
    }
    setupExpress(){
        app.listen(config.port , () => {
            console.log(`Server running at Port ${config.port}`)
        });
    }
    setupMongodb(){
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://localhost/simpleBlog',{useNewUrlParser:true,useUnifiedTopology:true});
    }
    setConfig(){
        app.use(bodyParser.urlencoded({ extended : false }));
        app.use(bodyParser.json({ type : 'application/json' }));
        app.use(expressValidator());
        app.use(express.static('assets'));
        app.set('views', path.resolve('view'));
        app.set('view engine', 'ejs');
        app.use(flash());
        app.use(session({...config.session}));
    }
    setRoutes(){
        app.use(require('./routes/routeSplitter'));
    }
}








