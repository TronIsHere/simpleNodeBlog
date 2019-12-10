const mongoose = require('mongoose');
// const Category = require('./category').schema;
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const postSchema = mongoose.Schema({

    title : {type:String,require:true},
    content : {type:String,require:true},
    slug : {type:String,require:true},
    img:{type:String,require:true},
    date:{type:String,require:true},
    category:{type:mongoose.Schema.Types.ObjectId,ref:'Category'}

},{timestamps:true});
postSchema.pre('save',function(next){
    var DateNow = `${monthNames[new Date().getMonth()]} ${new Date().getDay()},${new Date().getFullYear()}`;
    if(!this.date){
        this.date = DateNow;
    }
    next();
    });
module.exports = mongoose.model('Post',postSchema);