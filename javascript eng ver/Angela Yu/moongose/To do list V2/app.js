import express from "express";
import https from "https";
import bodyparser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import _ from "lodash"

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose
  .connect("mongodb+srv://sebinha:sebinha@todolistdb.jw1u5j7.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("Successfully connected!");
  })
  .catch((err) => {
    console.log("Error to connect: " + err);
  });
const Schema = mongoose.Schema;
const Model = mongoose.model;

const itemsSchema = new Schema({ name: String });

const itemsModel = Model("item", itemsSchema);

const item1 = itemsModel({ name: "Welcome to your todo" });

const item2 = itemsModel({ name: "Press '+' to add more todo boxes" });

const item3 = itemsModel({ name: "<--- press here to delete" });

const defaultItems = [item1, item2, item3];

const listSchema = new Schema({
  name: String,
  items: [itemsSchema],
});

const List = Model("List", listSchema);

// itemsModel.deleteMany({_id: "64d52fee10f60034f6dad2da"}).then((deletion)=>{
//     console.log(deletion)
//     mongoose.connection.close();
//   }).catch((err)=>{
//     console.log(err)
//     mongoose.connection.close();
//   })

const today = new Date();
const currentDay = today.getDay();
const currentStringDay = today.toLocaleString("en-us", { weekday: "long" });
let day = "";

const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
};

const todayString = today.toLocaleDateString("en-US", options);

app.get("/", (req, res) => {
  if (currentDay === 6 || currentDay === 0) {
    day = currentStringDay;
  } else {
    day = currentStringDay;
  }

  itemsModel.find().then((items) => {
    if (items.length === 0) {
      itemsModel
        .insertMany(defaultItems)
        .then(() => {
          console.log("Successfully saved default items to db");
        })
        .catch((err) => {
          console.log("Error to save items: " + err);
        });
      res.redirect("/");
    } else {
      res.render("list", {
        whichList: "Today",
        itemList: items,
      });
    }
  });
});

app.get("/:customURL", (req, res) => {
  const customURL = _.capitalize(req.params.customURL);

  List.findOne({ name: customURL })
    .then((foundList) => {
      if (!foundList) {
        const list = new List({
          name: customURL,
          items: defaultItems,
        });

        list.save();
        res.redirect("/" + customURL);
      } else {
        res.render("list", { whichList: customURL, itemList: foundList.items });
      }
    })
    .catch((err) => {
      console.log(err);
    });

  // const list = new List({
  //   name: customURL,
  //   items: defaultItems
  // })

  // res.render("list", { whichList: customURL, itemList: defaultItems });
});

app.post("/", (req, res) => {
  const itemName = req.body.itemList;
  const listName = req.body.list;
  const item = new itemsModel({ name: itemName });
  // console.log(listName);

  if (listName === "Today") {
    itemsModel
      .insertMany(item)
      .then(() => {
        console.log("Successfully saved default items to db");
      })
      .catch((err) => {
        console.log("Error to save items: " + err);
      });
    res.redirect("/");
  } else {
    List.findOne({ name: listName })
      .then((foundList) => {
        console.log("Custom todo item saved!");
        foundList.items.push(item);
        foundList.save();
        res.redirect("/" + listName);
      })
      .catch(() => {
        console.log("Error to insert custom todo");
      });
    console.log(item);
  }

  // itemsModel
  //   .insertMany([itemName])
  //   .then(() => {
  //     console.log("Todo item saved!");
  //   })
  //   .catch((err) => {
  //     console.log("Error to insert todo");
  //   });

  // res.redirect("/");
});

app.post("/delete", (req, res) => {
  const checkboxItemID = req.body.checkbox;
  const listName =  req.body.list

  if (listName === "Today"){
    itemsModel
    .findByIdAndDelete(checkboxItemID)
    .then(() => {
      console.log("Item deleted");
    })
    .catch((err) => {
      console.log("Item not found" + err);
    });
    res.redirect("/");
  } else {
    List.findOneAndUpdate({name: listName},{$pull: {items: {_id: checkboxItemID}}}).then(()=>{
      console.log("Custom item deleted!")
      res.redirect("/" + listName)
    }).catch((err)=>{
      console.log(err)
    })
  }
 
  
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
