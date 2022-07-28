require("dotenv").config();
const express = require("express");
const router = require("./app/router");
const sanitize = require("./app/middleware/sanitizer");

const PORT = process.env.PORT || 3000;

const app = express();
const session = require("express-session");

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use(sanitize);

app.use(router);

app.use(function(req,res) {
  res.status(404).render("404");
});

app.listen(PORT,()=> {
  console.log("Server ok");
});
