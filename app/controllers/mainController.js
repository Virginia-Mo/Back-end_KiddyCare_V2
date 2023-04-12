const { Tag,Teacher, Article, Comment, Classes, Testimonial, Gallery, NewsletterRequest, Classbooking, Message} = require("../models");
const { Op } = require('sequelize');

const mainController = {
    homePage: async (req,res) => {
      try { 
        const articles = await Article.findAll({
        include : ["tag","comments"],
        limit : 3, 
        order : [['createdAt', 'DESC']], 
        });
      res.json({articles})
    } catch (error) {
      res.status(500).send("Server error")
  }
    },
    // aboutPage(req,res) {
    //   res.render("about");
    // },
    getTags: async(req,res) => {
      try { 
        const tag = await Tag.findAll({include : "article"})
      res.json(tag)
    } catch (error) {
      res.status(500).send("Server error")
  }
    },
    getTestimonial: async(req,res) => {
      try { 
        const testimonial = await Testimonial.findAll();
      res.json(testimonial)
    } catch (error) {
      res.status(500).send("Server error")
  }
    },
    getGallery: async(req,res) => {
      try { 
        const gallery = await Gallery.findAll();
        console.log(req.session)
      res.json(gallery)
    } catch (error) {
      res.status(500).send("Server error")
  }
    },
    classesPage: async(req,res) => {
      try { 
        const classes = await Classes.findAll();
      res.json(classes)
    } catch (error) {
      res.status(500).send("Server error")
  }
    },
    teachersPage: async(req,res) => {
      try { 
        const teacher = await Teacher.findAll();
      res.json(teacher)
    } catch (error) {
      res.status(500).send("Server error")
  }
    },
    // A METTRE EN ADMIN

    
    




    // blogDetailsPage: async(req,res)=> {
    //   try {
    //   const tags = await Tag.findAll({include : "article"});
      
    //   const newArticle = await Article.findOne({include : "tag", order : [['createdAt', 'DESC']]});

    //   const articles = await Article.findAll({
    //     limit : 3, 
    //     order : [['createdAt', 'DESC']],
    //     });
    //   const comments = await Comment.findAll({where :{ article_id : newArticle.id}});

    //   res.json(newArticle, tags, articles, comments);
    // } catch (error) {
    //   res.status(500).send("Server Error")
    // }
    // },

    
    

    // getCommentsDetailPage : async (req,res,next) => {
    //   try {
    //   const comment = req.body;
    //   const newArticle = await Article.findOne({order : [['createdAt', 'DESC']]});

    //   const newcomment = await Comment.create({
    //     name : comment.namecomment,
    //     email :comment.emailcomment,
    //     message : comment.comment__message,
    //     article_id : newArticle.id
    // });

    //    if(newcomment){
    //       next()
    //  }} catch (error) {
    //   res.status(500).send("Server Error")
    //  }
    // },
    // searchedArticle : async (req,res) => {
    //   const articleid = +req.params.id;
    //   if (isNaN(articleid)) {
    //     return res.send("Invalid list id")
    //   }
    //   try {
    //   const tags = await Tag.findAll({include : "article"})
    //   const articles = await Article.findAll({
    //     limit : 3, 
    //     order : [['createdAt', 'DESC']],
    //     });
    
    //   const foundArticle = await Article.findByPk(articleid, {include : "tag"});
    //   const comments = await Comment.findAll({where :{ article_id : articleid}})

    //   res.json(foundArticle, comments, articles, tags) 

    // } catch (error){
    //   res.status(500).send("Server Error")
    // }
    // },
    // showArticlebyTag : async (req,res) => {
    //   const tagId = +req.params.id;
    //   if (isNaN(tagId)) {
    //     return res.send("Invalid list id")
    //   }
    //   try {
    //   const foundarticles = await Article.findAll({include : 'comments', where: { tag_id : tagId}});
    //   const tag = await Tag.findByPk(tagId);

    //   res.json({foundarticles, tag})

    // } catch (error){
    //   res.status(500).send("Server Error")
    // }
    // },
    // getComments : async (req,res, next) => {
    //   try {     
    //       const comments = req.body;

    //       const newcomment = await Comment.create({
    //           name : comments.namecomment,
    //           email :comments.emailcomment,
    //           message : comments.comment__message,
    //           article_id : req.params.id
    //       });
        
    //       if(newcomment){
    //           next()
          
    //   }}
    //     catch (error) {
    //       res.status(500).send("Server error")
    //   }},

    // contactPage(req,res) {
    //   res.render("contact");
    // },
    // getCopyrightsPage (req,res) {
    //   res.render("copyrights")
    // },
  //   searchBar : async (req,res) => {
  //     let results = null ;
  //     const data = req.body;

  //      try {
  //     const title = data.search.trim();
  //     results = await Article.findAll({
  //       include : ["tag", "comments"],
  //       where : { 
  //       [Op.or] : [
  //       {
  //       maintitle : {
  //         [Op.iLike]: `%${title}%`,
  //         }
  //       },
  //       {
  //         title1 : {
  //           [Op.iLike] : `%${title}%`,
  //         }
  //       },
  //       {
  //         title2 : {
  //           [Op.iLike] : `%${title}%`,
  //         }
  //     } ]
  //   }
  // });
  //     res.render("search", {results})

  //    } catch (error) {
  //     res.status(500).send("Server Error")
  //   }
    
  // }
 };


module.exports = mainController;