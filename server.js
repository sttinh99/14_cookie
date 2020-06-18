// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var db = require('./db');
var useRoute = require('./routes/books.route');
var useRoute1 = require('./routes/users.route');
var useRoute2 = require('./routes/transactions.route');
var cookieCount = require('./validation/cookiecount.validation');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());


app.set("view engine", "pug"); // register the template engine
// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];
// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
app.use("/books",cookieCount.cookies,useRoute);
app.use("/users",cookieCount.cookies,useRoute1);
app.use("/transactions",cookieCount.cookies,useRoute2)

app.get("/",function(req,res,next){
  res.cookie("user",12345);
  res.render('./index');
});
// https://expressjs.com/en/starter/basic-routing.html
// listen for requests :)
const listener = app.listen(3000, () => {
  console.log("Your app is listening on port " +3000);
});
