import express from "express";
import https from "https";
import bodyparser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

const today = new Date();
const currentDay = today.getDay();
const currentStringDay = today.toLocaleString("en-us", { weekday: "long" });
const day = "";
const itemList = [];
const workList = []

const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

app.get("/", (req, res) => {
  const todayString = today.toLocaleDateString("en-US", options);
  if (currentDay === 6 || currentDay === 0) {
    day = currentStringDay;
  } else {
    day = currentStringDay;
  }
  res.render("list", {
    whichList: todayString,
    itemList: itemList,
  });
});

app.get("/work", (req,res)=>{
  res.render("list", {whichList: "Work List", itemList: workList})
})

app.post("/", (req, res) => {
  const item = req.body.itemList

  if (req.body.list === "Work"){
    workList.push(item)

    res.redirect("/work")
  } else{
    itemList.push(item);

    res.redirect("/");
  }
  
});

app.get("/about", (req,res)=>{
  res.render("about")
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
