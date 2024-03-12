import express from "express";
import bodyParser from "body-parser"
import pg from "pg";
const { Pool, Client } = pg;

const app = express();
const port = 3000;

const credentials = {
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "1234",
  port: 5432,
};

const client = new Client(credentials);

await client.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

async function checkVisited(){
  const countryCodes = []

  const resp = await client.query("SELECT * FROM visited_countries ORDER BY id ASC");

  resp.rows.map((countryCode)=>{
    countryCodes.push(countryCode.country_code)
  })

  return countryCodes
}



app.get("/", async (req, res) => {

  const countries = await checkVisited()

  res.render("index.ejs", {
    countries: countries,
    total: countries.length
  });

});

app.post("/add", async (req,res)=>{
  
  try {

    const addedCountry = req.body.country
    const matchedCountry = await client.query("SELECT country_code FROM countries WHERE country_name LIKE INITCAP($1)", ['%' + addedCountry + '%'])
    const country_code = matchedCountry.rows[0].country_code
  
    try{

      await client.query("INSERT INTO visited_countries(country_code) VALUES($1)", [country_code])
      res.redirect('/')

    } catch(err){

      const countries = await checkVisited()

      res.render("index.ejs", {
        countries: countries,
        total: countries.length,
        error: "Already added, add a different one"
      });

    }
  } catch(err){
    const countries = await checkVisited()

    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      error: "Country doesn't exist"
    });

  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
