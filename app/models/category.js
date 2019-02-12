const mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    category: String,
    categoryId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Category', UserSchema);