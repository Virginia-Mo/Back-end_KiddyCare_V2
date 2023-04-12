// const cloudinary = require("cloudinary").v2;
// const { CloudinaryStorage } = require("multer-storage-cloudinary");
// const multer = require("multer");

// const storage = new CloudinaryStorage({
//   cloudinary: cloudinary,
//   params: {
//     folder: "KDC",
//   },
// });
// const upload = multer({ storage: storage });
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
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });
const express = require("express");
const router = express.Router();

const mainController = require("./controllers/mainController");
const checkedLogged = require("./middleware/checkLogged");
const loginController = require("./controllers/loginController");
const newsletterController = require("./controllers/newsletterController");
const articlesController = require("./controllers/articlesController");
const messageController = require("./controllers/messageController");
const commentsController = require("./controllers/commentsController");
const classbookingController = require("./controllers/classbookingController");


// MAIN DATAS
router.get("/", mainController.homePage);
router.get("/tags", mainController.getTags);
router.get("/classes", mainController.classesPage);
router.get("/teachers", mainController.teachersPage);
router.get("/testimonials", mainController.getTestimonial);
router.get("/gallery", mainController.getGallery);

//  ARTICLES
router.get("/articles", articlesController.pagesPage);
router.post("/admin/createarticle", checkedLogged, articlesController.createArticle);
router.patch("/admin/updatearticle/:id", checkedLogged,articlesController.updateArticle)
router.delete("/admin/removearticle/:id", checkedLogged, articlesController.removeArticle);

// LOG
router.post("/login", loginController.checkin);
router.get("/logout", loginController.logout);

// COMMENTS
router.get("/admin/comments", checkedLogged, commentsController.getComments)
router.post("/comments", commentsController.createComment)
router.delete("/admin/removecomment/:id", checkedLogged, commentsController.removeComment);

// NEWSLETTER
router.get("/admin/newsletter",checkedLogged, newsletterController.getNewsletter)
router.post("/newsletter", newsletterController.createNewsLetter)
router.delete("/admin/removerequest/:id", checkedLogged, newsletterController.removeNewsletterRequest);

// CLASS BOOKING
router.get("/admin/bookingclass", checkedLogged, classbookingController.getBookingClass)
router.post("/bookingclass", classbookingController.createBookingClass)
router.delete("/admin/removebooking/:id", checkedLogged, classbookingController.removeBooking);

// MESSAGE
router.get("/admin/message",checkedLogged, messageController.getMessage);
router.post("/message", messageController.createMessage)
router.delete("/admin/removemessage/:id", checkedLogged, messageController.removeMessage);

module.exports = router;
