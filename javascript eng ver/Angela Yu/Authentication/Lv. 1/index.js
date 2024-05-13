import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "123456",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password

  try { 

    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [username])

    if (checkResult.rows.length > 0){
      res.send("Your email was already registered. Try to login")
    } else{
      const login = await db.query("INSERT INTO users (email, password) VALUES ($1,$2)", [username, password])
      console.log(login)
      res.render("secrets.ejs")
    }}
  catch (err){
    console.log(err)
  }
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try { 

    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [username])

    if (checkResult.rows.length > 0){
      const email = checkResult.rows[0].email
      const loginpassword = checkResult.rows[0].password
      if (email === username && loginpassword === password){
        res.render("secrets.ejs")
      }else{
        res.send("Your email or password is wrong")
      }
    } else{
      res.send("Your email was not registered. Try to register first")
    }}
  catch (err){
    console.log(err)
  }

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
