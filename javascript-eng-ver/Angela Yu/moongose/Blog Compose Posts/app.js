//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// Load the core build.
const _ = require("lodash");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()


const homeStartingContent =
  "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent =
  "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent =
  "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI).then(()=>{
  console.log("Successfully connected!")
}).catch((err)=>{
  console.log("Failed to connect:" + err)
})

const Schema = mongoose.Schema
const Model = mongoose.model

let posts = [];

const errorCompose = {title: "DB not working", content: "Verify why the DB is not triggering"}

const PostsSchema = new Schema({title: String, content: String})
const Posts = Model("Post", PostsSchema)

app.get("/", (req, res) => {
  Posts.find().then((items)=>{
    res.render("home", { startingContent: homeStartingContent, posts: items });
  }).catch(()=>{
    res.render("home", { startingContent: homeStartingContent, posts: [errorCompose] });
  })
});

app.get("/post/:post", (req, res) => {

  Posts.findOne({_id: req.params.post}).then((post)=>{
    res.render("post", {title: post.title, content: post.content });
  }).catch((err)=>{
    res.render("post", {title: errorCompose.title, content: errorCompose.content});
    console.log("Error trying to access the post:" + err)
  })
  
  
});

app.get("/about", (req, res) => {
  res.render("about", { about: aboutContent });
});

app.get("/contact", (req, res) => {
  res.render("contact", { contact: contactContent });
});

app.get("/compose", (req, res) => {
  res.render("compose");
});

app.post("/compose", (req, res) => {
  const post = { title: req.body.postTitle, content: req.body.postBody };
  Posts.insertMany(post).then(()=>{
    console.log("Posted!")
  }).catch((err)=>{
    console.log("Error on posting:" + err)
  })
  posts.push(post);
  res.redirect("/");
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
