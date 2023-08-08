const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;

const uri = "mongodb://127.0.0.1:27017/fruitsDB";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Connection Established");
  })
  .catch((err) => {
    console.log(err);
  });

async function run() {
  // Defining Fruits schema
  const fruitSchema = new Schema({
    name: { type: String, required: [true, "Nameless fruit?"]},
    rating: { type: Number, min: 1, max: 10 },
    review: String,
  });

  // Defining Fruits model
  const Fruit = Model("Fruit", fruitSchema);

  // const banana = new Fruit({
  //   name: "Banana",
  //   rating: 10,
  //   review: "It's a banana right?",
  // });

// const fruitTest = new Fruit({
//     // name: "Orange",
//     rate: 8,
//     review: "Makes a good juice",
//   });
  
  // Fruit.insertMany([fruitTest])
  //   .then((fruits) => {
  //     console.log(`Fruits inserted on db: \n ${fruits}`);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  // Fruit.find()
  //   .then((fruits) => {
  //     fruits.map((fruit) => {
  //       mongoose.connection.close();
  //       console.log(fruit.name);
  //     });
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // Fruit.save()

  // // Create collection of Model
  // Fruit.createCollection().then(function (collection) {
  //   console.log("Collection is created!");
  // });

  const apple = new Fruit({
    name: "Apple",
    rate: 3,
    review: "Not so tasty",
  });

  const personSchema = new Schema({name: String, age: Number, favouriteFruit: fruitSchema})

  const Person = mongoose.model("Person", personSchema)

  const person = new Person({name: "John", age: 37})

  // person.save()

  Person.updateOne({name: "John"}, {favouriteFruit: apple}).then(()=>{
    console.log("Person updated!")
  }).catch((err)=>{
    console.log(err)
  })



  // Person.deleteMany({name: "John"}).then((deletion)=>{
  //   console.log(deletion)
  //   mongoose.connection.close();
  // }).catch((err)=>{
  //   console.log(err)
  //   mongoose.connection.close();
  // })

  // Fruit.deleteMany({name: "Orange"}).then((deletion)=>{
  //   console.log(deletion)
  //   mongoose.connection.close();
  // }).catch((err)=>{
  //   console.log(err)
  //   mongoose.connection.close();
  // })

  // const orange = new Fruit({
  //   name: "Orange",
  //   rate: 8,
  //   review: "Makes a good juice",
  // });

  // orange.save()

  // const victor = new Person({name: "victor", age:"20", favouriteFruit: orange})

  // victor.save().then(()=>{
  //   console.log("Person saved")
  // }).catch((err)=>{
  //   console.log(err)
  // })
}


run().catch(console.dir);

// Connection to mongoDB Cloud
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://sebinha:sebinha@fruitsdb.2fqmv9q.mongodb.net/?retryWrites=true&w=majority";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//     try {
//         const database = client.db("FruitsDB");
//         const fruits = database.collection("fruits");
//         // create an array of documents to insert
//         const docs = [
//           { name: "apple", score: 8, review: "Great fruit" },
//           { name: "orange", score: 6, review: "Kinda sour" },
//           { name: "banana", score: 9, review: "Great stuff" },
//         ];
//         // this option prevents additional documents from being inserted if one fails
//         const options = { ordered: true };
//         const result = await fruits.insertMany(docs, options);
//         console.log(`${result.insertedCount} documents were inserted`);
//       } finally {
//         await client.close();
//       }
// }
// run().catch(console.dir);
