const { Article, Tag } = require("../models");

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
  pagesPage : async(req,res) => {
    const articles = await Article.findAll();
    res.render("pages", {articles});
  },
  blogDetailsPage: async(req,res)=> {
    const tags = await Tag.findAll();
    const newArticle = await Article.findOne({order : [['createdAt', 'DESC']]})
    // const tag = await Tag.findByPk({where : {id : newArticle.tag_id}})
    res.render("blogDetails", {newArticle, tags});
  },
  searchedArticle : async (req,res) => {
    const articleid = req.params.id;
    console.log(articleid)
    const foundArticle = await Article.findByPk(articleid);
    console.log(foundArticle)
    res.render("searchedArticle", {foundArticle})
  },
  contactPage(req,res) {
    res.render("contact");
  },
};

module.exports = mainController;