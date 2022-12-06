const express =require("express");
const mongoose = require("mongoose");
const app = express();
const cors= require("cors");
const PostModal1 = require("./post_mondal1");

app.use(cors());
app.use(express.json({limit:"30mb", extended: true}));

app.listen(process.env.PORT || 3005, (err) =>{
    if(!err){
        console.log("server started at 3005 Port");
    }else{
        console.log(err);
    }
});

const url = "mongodb://localhost/project"
mongoose.connect(url, (data) => {
    console.log("Successfully connected to db");
  }, (err) => {
    console.log(err)
  });


  app.get('/image', (req, res) => {
    console.log("Backend");
    PostModal1.find().then((post)=>{
      res.status(200).send(post)
    }).catch((err)=>{
      res.status(400).send(err)
    })
  })

    app.post("/addsongs", (req, res) => {

      console.log(req.body);
          PostModal1.create(req.body).then((post)=>{
            res.status(200).send(post);
            console.log("final",post)
      
          }).catch((err)=>{
            res.status(400).send(err);
          })
      })

    
    //   app.post('/addsongs',async (req,res)=>{

    //     const data={
    //       song_name: req.body.song_name,
    //       dor: req.body.dor,
    //       image: req.body.image,
    //       artist_name: req.body.artist_name
    //     }
    //   console.log(data);
    //   res.send(data);
    // })
      
