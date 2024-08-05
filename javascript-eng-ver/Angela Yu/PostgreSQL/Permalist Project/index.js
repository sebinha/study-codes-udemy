import express from "express";
import bodyParser from "body-parser";
import pkg from "pg";
const { Pool, Client } = pkg;

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const credentials = {
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "1234",
  port: 5432,
};

const client = new Client(credentials);

await client.connect();



app.get("/", async(req, res) => {
  const resp = await client.query("SELECT * FROM items ORDER BY id ASC");

  let items = resp.rows;

  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  const text = "INSERT INTO items(title) VALUES($1)";
  const values = [item];
  // items.push({ title: item });
  try {
    await client.query(text, values);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }

  
});

app.post("/edit", async(req, res) => {

  const text = "UPDATE items SET title = $1 WHERE id = $2";
  const values = [req.body.updatedItemTitle, req.body.updatedItemId];

  try {
    await client.query(text, values);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }

  
});

app.post("/delete", async(req, res) => {
  // console.log(req.body.deleteItemId)
  const text = "DELETE FROM items WHERE id = $1";
  const values = [req.body.deleteItemId];

try {
  await client.query(text, values);
  res.redirect("/");
} catch (err) {
  console.log(err);
}

  
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
