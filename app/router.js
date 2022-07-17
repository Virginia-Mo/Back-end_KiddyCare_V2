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
router.post("/about",  adminController.getNewsLetterRequest);

router.get("/classes", mainController.classesPage);
router.post("/classes", adminController.getBooking,mainController.classesPage );

router.get("/teachers", mainController.teachersPage);
router.post("/teachers",  adminController.getNewsLetterRequest);

router.get("/gallery", mainController.galleryPage);
router.post("/gallery",  adminController.getNewsLetterRequest);
router.get("/pages", mainController.pagesPage);
router.post("/pages",  adminController.getNewsLetterRequest);

router.get("/blogdetails", mainController.blogDetailsPage);
router.post("/blogdetails", mainController.getCommentsDetailPage,mainController.blogDetailsPage);

router.get("/blogdetails/:id",mainController.searchedArticle);
router.post("/blogdetails/:id", mainController.getComments,mainController.searchedArticle);

router.get("/user/comments", checkedLogged, userController.getCommentsPage);

router.get("/user/removecomment/:id", checkedLogged, userController.removeComment,userController.getCommentsPage);

router.get("/tag/:id", mainController.showArticlebyTag);
router.post("/tag/:id",  adminController.getNewsLetterRequest);

router.get("/contact", mainController.contactPage);
router.post("/contact", adminController.getMessage);

router.get("/login", loginController.login);
router.post("/login", loginController.checkin);

router.get("/user",checkedLogged, userController.getPage);
router.get("/logout", checkedLogged, userController.logout);

router.get("/admin/message", checkedLogged, adminController.getMessagePage);
router.get("/admin/removemessage/:id", checkedLogged, adminController.removeMessage,adminController.getMessagePage);

router.get("/admin/classbooking", checkedLogged, adminController.getBookingPage);
router.get("/admin/removebooking/:id", checkedLogged, adminController.removeBooking,adminController.getBookingPage);

router.get("/admin/newsletter", checkedLogged, adminController.getNewsletterRequestPage);
router.get("/admin/removerequest/:id", checkedLogged, adminController.removeNewsletterRequest,adminController.getNewsletterRequestPage);

router.get("/user/createarticle", checkedLogged, userController.getCreateArticlePage);
router.get("/user/articles",  checkedLogged,userController.showArticles);
router.get("/user/removearticle/:id", checkedLogged, userController.removeArticle,userController.showArticles);
router.post("/user/createarticle", checkedLogged, upload.fields([{name:'mainimg'},{name : 'img1'},{name: 'img2'},{name: 'profile'}]), userController.createArticle, userController.getCreateArticlePage);

module.exports = router;