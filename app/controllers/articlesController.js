const { Article, Comment } = require('../models');

const articlesController = {
    pagesPage : async(req,res) => {
        try {
        const articles = await Article.findAll({include : ["tag","comments"], order : [['id', 'DESC']]});
        res.json(articles);
      } catch (error) {
        res.status(500).send("Server Error")
      }
      },
    createArticle: async (req, res, next) => {
        try {
          let data = req.body;
          const idUser = parseInt(data.user_id,10)
          const tagArticle = parseInt(data.tag,10)
          const article = await Article.create({
            maintitle: data.maintitle,
            main_img: data.main_img,
            introduction: data.introduction,
            title1: data.title1,
            img1: data.img1,
            description1: data.description1,
            title2: data.title2,
            img2: data.img2,
            description2: data.description2,
            author_img: data.author_img,
            authorname: data.authorname,
            authorjob: data.authorjob,
            tag_id: tagArticle,
            user_id: idUser,
          });
          if (article !== undefined) {
         res.json("The article has been created")
        } 
        } catch (error) {
          res.status(500).send(error)
        }
      },
      removeArticle: async (req, res) => {
        const idArticle = parseInt(req.params.id, 10)
        try {
          const comments =  await Comment.findAll({where : {
            article_id : idArticle
          }})
          console.log(comments)
          if (comments){
          const comment = await Comment.destroy({where : {
            article_id : idArticle
          }})}
          const removedArticle = await Article.destroy({
            where: {
              id: idArticle
            }
          })
          if (removedArticle !== undefined) {
            res.json("The article has been removed")
          } else {
            res.send("Nothing has been removed")
          }
    
        } catch (error) {
          res.status(500).send("Server error")
        }
      },
      updateArticle : async (req, res) => {
        try {
          let data = req.body;
          const idUser = parseInt(data.user_id,10)
          const idArticle = parseInt(req.params.id, 10)
          const article = await Article.findOne({ where: { id: idArticle }});
          if (!article){
            throw new Error("Article not found")
          }
    
          for (const key in req.body){
            if (req.body[key] === "") {
              req.body[key] =  article[key]
            } 
          }     
          console.log(req.body)
          
          const updatedArticle = await Article.update({
            maintitle: data.maintitle,
            main_img: data.main_img,
            introduction: data.introduction,
            title1: data.title1,
            img1: data.img1,
            description1: data.description1,
            title2: data.title2,
            img2: data.img2,
            description2: data.description2,
            author_img: data.author_img,
            authorname: data.authorname,
            authorjob: data.authorjob,
            tag_id: data.tag_id,
            user_id: idUser,
          },{ where :
             {id : idArticle}});
    
          if (updatedArticle !== undefined) {
         res.json("The article has been updated")
        } 
        } catch (error) {
          res.status(500).send(error)
        }
      },
};
module.exports = articlesController;