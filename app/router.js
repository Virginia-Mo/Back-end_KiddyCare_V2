const express = require("express");
const mainController = require("./controllers/mainController");
const loginController = require("./controllers/loginController");
const userController = require("./controllers/userController");
const checkedLogged = require("./middleware/checkLogged");

const router = express.Router();

router.get("/", mainController.homePage);
router.get("/about", mainController.aboutPage);
router.get("/classes", mainController.classesPage);
router.get("/teachers", mainController.teachersPage);
router.get("/gallery", mainController.galleryPage);
router.get("/pages", mainController.pagesPage);
router.get("/blogdetails", mainController.blogDetailsPage);
router.get("/contact", mainController.contactPage);

router.get("/login", loginController.login);
router.post("/login", loginController.checkin);

router.get("/user",checkedLogged, userController.getPage);
router.get("/logout", checkedLogged, userController.logout);

module.exports = router;