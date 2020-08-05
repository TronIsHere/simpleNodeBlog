global.config = require('./config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const Routers = require('./app/routes');
const mongoose = require('mongoose')
const path = require('path');

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json({ type : 'application/json' }));
app.use(expressValidator());
app.use(express.static('assets'));
app.set('views', path.resolve('view'));
app.set('view engine', 'ejs');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/simpleBlog',{useNewUrlParser:true});

app.use(require('./app/routes'));
app.use(require('./app/routes/api/forwardapi'));

app.listen(config.port , () => {
    console.log(`Server running at Port ${config.port}`)
});
