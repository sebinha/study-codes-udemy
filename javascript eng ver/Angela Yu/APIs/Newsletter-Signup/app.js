import bodyParser from "body-parser";
import express from "express";
import request from "request";
import path from "path";
import { fileURLToPath } from "url";
import mailchimp from "@mailchimp/mailchimp_marketing";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

mailchimp.setConfig({
  apiKey: "0079c74fb744922a569f3207adc68234-us14",
  server: "us14",
});

// async function run() {
//   const response = await mailchimp.ping.get();
// }

// run();

const app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

const batchMembers = async(members) =>{
  const response = await mailchimp.lists.batchListMembers("f53cec6ad5", members);

  return response
}

app.post("/", async (req, res) => {
  const fname = req.body.firstname;
  const lname = req.body.lastname;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: fname,
          LNAME: lname,
        },
      },
    ],
  };

  const response = await batchMembers(data)
  console.log(response)


  const errorResponse = response.errors[0]?.error
  

  if (errorResponse?.length > 0){
    res.sendFile(__dirname + "/failure.html");
  } else{
    res.sendFile(__dirname + "/success.html");
  }

});

app.listen(process.env.PORT || 3000, () => {
  console.log("server is running on port 3000");
});
// API KEY
// 0079c74fb744922a569f3207adc68234-us14

//List ID
// f53cec6ad5
