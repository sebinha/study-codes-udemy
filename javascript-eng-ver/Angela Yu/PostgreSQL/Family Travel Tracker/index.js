import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "123456",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisited(user_id) {
  const result = await db.query("SELECT country_code FROM visited_countries WHERE (user_id::text) LIKE '%' || $1 || '%';", [user_id]);
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}
app.get("/", async (req, res) => {
  const user = await db.query("SELECT * FROM users");
  const user_id = req.query ? req.query.user : user.rows[0].id;
  const countries = await checkVisited(user_id);
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: user.rows,
    userId: user_id,
    color: "teal",
  });
});
app.post("/add", async (req, res) => {
  const input = req.body["country"];
  const userId = req.body["userId"]


  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result?.rows[0];
    const countryCode = data?.country_code;
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code, user_id) VALUES ($1,$2)",
        [countryCode, userId]
      );
      userId ? res.redirect("/" + "?user=" + userId) : res.redirect("/")
    } catch (err) {
      console.log(err);
      userId ? res.redirect("/" + "?user=" + userId) : res.redirect("/")
    }
  } catch (err) {
    console.log(err);
    userId ? res.redirect("/" + "?user=" + userId) : res.redirect("/")
  }
});
app.post("/user", async (req, res) => {res.render("new.ejs");});

app.post("/new", async (req, res) => {
  try {
    await db.query(
      "INSERT INTO users (name,color) VALUES ($1,$2)",
      [req.body.name,req.body.color]
    );
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
