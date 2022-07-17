const { Article, Tag, Comment } = require("../models");


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
    
    const newArticle = await Article.findOne({order : [['createdAt', 'DESC']]});

    
    const articles = await Article.findAll({
      limit : 3, 
      order : [['createdAt', 'DESC']], 
      // include :["comment", 
      //  { association : 'tag',
      //   where : {id : tag_id}},
      // ]
      });
    const comments = await Comment.findAll({where :{ article_id : newArticle.id}});

    res.render("blogDetails", {newArticle, tags, articles, comments});
  },
  getCommentsDetailPage : async (req,res,next) => {
    const comment = req.body;
    const newArticle = await Article.findOne({order : [['createdAt', 'DESC']]});

    const newcomment = await Comment.create({
      name : comment.namecomment,
      email :comment.emailcomment,
      message : comment.comment__message,
      article_id : newArticle.id
  });

  if(newcomment){
    next()

  }},
  searchedArticle : async (req,res) => {
    try {
    const articleid = req.params.id;
   
    const tags = await Tag.findAll()
    const articles = await Article.findAll({
      limit : 3, 
      order : [['createdAt', 'DESC']],
      });
   
    const foundArticle = await Article.findByPk(articleid);
    const comments = await Comment.findAll({where :{ article_id : articleid}})

    res.render("searchedArticle", {foundArticle, comments, articles, tags}) 
  } catch (error){
    res.status(500).send("Problem")
  }
  },
  showArticlebyTag : async (req,res) => {
    const tagId = req.params.id;
    console.log(tagId)
    try {
    const foundarticles = await Article.findAll({where: { tag_id : tagId}});
    console.log(foundarticles)
    res.render("tags", {foundarticles})

  } catch (error){
    res.status(500).send("Server problem")
  }
  },
  getComments : async (req,res, next) => {
    try {     
        const comments = req.body;

        const newcomment = await Comment.create({
            name : comments.namecomment,
            email :comments.emailcomment,
            message : comments.comment__message,
            article_id : req.params.id
        });
      
        if(newcomment){
      next()
        
    }}
      catch (error) {
        res.status(500).send("Server error")
    }},

  contactPage(req,res) {
    res.render("contact");
  },
  
};

module.exports = mainController;