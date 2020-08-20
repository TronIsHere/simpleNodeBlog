const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const mongoose = require('mongoose')
const path = require('path');

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
    }
    setRoutes(){
        app.use(require('./routes/routeSplitter'));
    }
}








