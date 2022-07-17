require("dotenv").config();
const express = require("express");
const router = require("./app/router");
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

app.use(router);

app.use(function(req,res) {
  res.status(404).send("Cette page n'existe pas");
});

app.listen(PORT,()=> {
  console.log(`Server listening on http://localhost:${PORT}`);
});
