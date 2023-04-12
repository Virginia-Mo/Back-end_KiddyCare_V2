require("dotenv").config();
const express = require("express");
const router = require("./app/router");
const sanitize = require("./app/middleware/sanitizer");
const cors = require('cors');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;

const app = express();
const session = require("express-session");

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(cors());
app.use(sanitize);
app.use(bodyParser.json())

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie : {secure : false}
}));

app.use(router);

app.use(function(req,res) {
  res.status(404).render("404");
});

app.listen(PORT,()=> {
  console.log(`Server ok at http://localhost:${PORT}`);
});