const mongoose = require("mongoose");
const PostSchema2 = new mongoose.Schema({
    key:String,
    cat:String,
    bio:String
});

const PostModal2= new mongoose.model("posts",PostSchema2);
module.exports=PostModal2;