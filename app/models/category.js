const mongoose = require('mongoose');
// const Post = require('./post');
var catSchema = mongoose.Schema({
    categoryName: String,
    posts:[{type:mongoose.Schema.Types.ObjectId,ref:'Post'}]
});

module.exports = mongoose.model('Category', catSchema);