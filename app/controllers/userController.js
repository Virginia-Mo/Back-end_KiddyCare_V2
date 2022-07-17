const {Article, User, Tag} = require("../models");

const userController = {
  getPage (req,res){
    res.render("user/user");
  },
  logout (req,res) {
    delete req.session.user;
    res.render("home");
  },
  getCreateArticlePage (req,res){
    res.render("user/createArticle");
  },
  showArticles: async (req,res) =>{
    const articles = await Article.findAll()
    res.render("user/articles", {articles})
  },
  createArticle : async (req,res) =>{
   try{
    let data = req.body;

    const article = await Article.create({
      maintitle : data.maintitle,
      main_img :req.files.mainimg[0].filename,
      introduction : data.introduction,
      title1 :data.title1,
      img1 : req.files.img1[0].filename,
      description1 : data.description1,
      title2 : data.title2,
      img2 : req.files.img2[0].filename,
      description2 : data.description2,
      author_img : req.files.profile[0].filename,
      authorname : data.name,
      authorjob : data.job,
      tag_id : data.tag,
      user_id : req.session.user.id,
      });
     
      res.redirect("/pages")
} catch (error) {
  res.status(500).send("Server problem")
}
}
  };

module.exports = userController;