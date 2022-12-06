const mongoose = require("mongoose");
const PostSchema1 = new mongoose.Schema({
    song_name:String,
    dor:String,
    image:String,
    artist_name:String
});

const PostModal1= new mongoose.model("posts",PostSchema1);
module.exports=PostModal1;