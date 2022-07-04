const mainController = {
  homePage(req,res) {
    res.render("home");
  },
  aboutPage(req,res) {
    res.render("about");
  },
  classesPage(req,res) {
    res.render("classes");
  },
  teachersPage(req,res) {
    res.render("teachers");
  },
  galleryPage(req,res) {
    res.render("gallery");
  },
  pagesPage(req,res) {
    res.render("pages");
  },
  blogDetailsPage(req,res) {
    res.render("blogDetails");
  },
  contactPage(req,res) {
    res.render("contact");
  },
};

module.exports = mainController;