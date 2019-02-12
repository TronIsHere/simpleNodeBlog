const mongoose = require('mongoose');

const postSchema = mongoose.Schema({

    title : {type:String,require:true},
    content : {type:String,require:true},
    slug : {type:String,require:true},
    img:{type:String,require:true}

},{timestamps:true});

module.exports = mongoose.model('Post',postSchema);