const mongoose = require('mongoose');

var catSchema = mongoose.Schema({
    category: String,
    categoryId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Category', catSchema);