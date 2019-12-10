const mongoose = require('mongoose');
// const Post = require('./post');
const catSchema = mongoose.Schema({
    categoryName: {type:String},
    posts:[{type:mongoose.Schema.Types.ObjectId,ref:'Post'}]
},{timestamps:true});

module.exports = mongoose.model('Category', catSchema);