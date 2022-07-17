const express = require("express");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null , file.originalname);
  }
});
const upload = multer({ storage: storage });

const mainController = require("./controllers/mainController");
const loginController = require("./controllers/loginController");
const userController = require("./controllers/userController");
const checkedLogged = require("./middleware/checkLogged");
const adminController = require("./controllers/adminController");

const router = express.Router();

router.get("/", mainController.homePage);
router.post("/",  adminController.getNewsLetterRequest);

router.get("/about", mainController.aboutPage);

router.get("/classes", mainController.classesPage);
router.post("/classes", adminController.getBooking);

router.get("/teachers", mainController.teachersPage);
router.get("/gallery", mainController.galleryPage);
router.get("/pages", mainController.pagesPage);
router.get("/blogdetails", mainController.blogDetailsPage);
router.get("/blogdetails/:id",mainController.searchedArticle);


router.get("/contact", mainController.contactPage);
router.post("/contact", adminController.getMessage);

router.get("/login", loginController.login);
router.post("/login", loginController.checkin);

router.get("/user",checkedLogged, userController.getPage);
router.get("/logout", checkedLogged, userController.logout);

router.get("/admin/message", checkedLogged, adminController.getMessagePage);
router.get("/admin/classbooking", checkedLogged, adminController.getBookingPage);
router.get("/admin/newsletter", checkedLogged, adminController.getNewsletterRequestPage);

router.get("/user/createarticle", checkedLogged, userController.getCreateArticlePage);
router.get("/user/articles",  checkedLogged,userController.showArticles);
router.post("/user/createarticle", checkedLogged, upload.fields([{name:'mainimg'},{name : 'img1'},{name: 'img2'},{name: 'profile'}]), userController.createArticle);

module.exports = router;