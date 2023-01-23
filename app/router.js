const express = require("express");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "KDC",
  },
});
const upload = multer({ storage: storage });
// const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, "public/uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null , file.originalname);
//   }
// });
// const upload = multer({ storage: storage });
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const mainController = require("./controllers/mainController");
const adminController = require("./controllers/adminController");
const checkedLogged = require("./middleware/checkLogged");
const loginController = require("./controllers/loginController");
const userController = require("./controllers/userController");

const router = express.Router();


router.get("/tags", mainController.getTags);

router.get("/", mainController.homePage);
router.post("/", adminController.getNewsLetterRequest,mainController.homePage);

router.get("/copyrights", mainController.getCopyrightsPage);

router.get("/about", mainController.aboutPage);

router.get("/classes", mainController.classesPage);
router.post("/classes", adminController.getBooking, mainController.classesPage);

router.get("/teachers", mainController.teachersPage);

router.get("/pages", mainController.pagesPage);
router.post("/pages", mainController.searchBar);

router.get("/blogdetails", mainController.blogDetailsPage);
router.post("/blogdetails", mainController.getCommentsDetailPage,mainController.blogDetailsPage);

router.get("/blogdetails/:id",mainController.searchedArticle);
router.post("/blogdetails/:id", mainController.getComments,mainController.searchedArticle);

router.get("/testimonials", mainController.getTestimonial);

router.get("/gallery", mainController.getGallery);

router.get("/user/comments", checkedLogged, userController.getCommentsPage);

router.get("/user/removecomment/:id", checkedLogged, userController.removeComment);

router.get("/tag/:id", mainController.showArticlebyTag);

router.get("/contact", mainController.contactPage);
router.post("/contact", adminController.getMessage, mainController.contactPage);

router.get("/login", loginController.login);
router.post("/login", loginController.checkin);

router.get("/user",checkedLogged, userController.getPage);
router.get("/logout", checkedLogged, loginController.logout);

router.get("/admin/message", checkedLogged, adminController.getMessagePage);
router.get("/admin/removemessage/:id", checkedLogged, adminController.removeMessage);

router.get("/admin/classbooking", checkedLogged, adminController.getBookingPage);
router.get("/admin/removebooking/:id", checkedLogged, adminController.removeBooking);

router.get("/admin/newsletter", checkedLogged, adminController.getNewsletterRequestPage);
router.get("/admin/removerequest/:id", checkedLogged, adminController.removeNewsletterRequest);

router.get("/user/articles",  checkedLogged,userController.showArticles);
router.get("/user/removearticle/:id", checkedLogged, userController.removeArticle);

router.get("/user/createarticle", checkedLogged, userController.getCreateArticlePage);
// router.post("/user/createarticle", checkedLogged, upload.fields([{name:'mainimg'},{name : 'img1'},{name: 'img2'},{name: 'profile'}]), userController.createArticle);
// app.post("/", upload.single("picture"), async (req, res) => {
//   return res.json({ picture: req.file.path });
// });
module.exports = router;
