const express = require("express");
const mainController = require("./controllers/mainController");
const adminController = require("./controllers/adminController");

const router = express.Router();

router.get("/", mainController.homePage);
router.get("/about", mainController.aboutPage);
router.get("/classes", mainController.classesPage);
router.get("/teachers", mainController.teachersPage);
router.get("/gallery", mainController.galleryPage);
router.get("/pages", mainController.pagesPage);
router.get("/blogdetails", mainController.blogDetailsPage);
router.get("/contact", mainController.contactPage);

router.get("/login", adminController.login);
router.post("/login", adminController.checkin);

module.exports = router;