const { Article, Comment } = require("../models");

const userController = {
  getPage(req, res) {
    res.render("user/user");
  },
  getCreateArticlePage(req, res) {
    res.render("user/createArticle");
  },
  showArticles: async (req, res) => {
    const articles = await Article.findAll()
    res.render("user/articles", {
      articles
    })
  },
  createArticle: async (req, res, next) => {
    try {
      let data = req.body;

      const article = await Article.create({
        maintitle: data.maintitle,
        main_img: req.files.mainimg[0].filename,
        introduction: data.introduction,
        title1: data.title1,
        img1: req.files.img1[0].filename,
        description1: data.description1,
        title2: data.title2,
        img2: req.files.img2[0].filename,
        description2: data.description2,
        author_img: req.files.profile[0].filename,
        authorname: data.name,
        authorjob: data.job,
        tag_id: data.tag,
        user_id: req.session.user.id,
      });
      if (article) {
     res.redirect("/user")
    } 
    } catch (error) {
      res.status(500).send("Server error")
    }
  },
  removeArticle: async (req, res) => {
    try {
      const id = req.params.id;
      const comments = await Comment.destroy({where : {
        article_id : id
      }})
      const removedArticle = await Article.destroy({
        where: {
          id: id
        }
      })
      if (removedArticle) {
        res.redirect("/user")
      }

    } catch (error) {
      res.status(500).send("Server error")
    }
  },
  getCommentsPage : async (req,res) => {
    const comments = await Comment.findAll();
    res.render("user/comments", {comments})
  },
  removeComment: async (req, res) => {
    const id = req.params.id;
    try {
      const removedComment = await Comment.destroy({
        where: {
          id: id
        }
      })
      if (removedComment) {
       res.redirect("/user")
      }

    } catch (error) {
      res.status(500).send("Server error")
    }
  },
};

module.exports = userController;