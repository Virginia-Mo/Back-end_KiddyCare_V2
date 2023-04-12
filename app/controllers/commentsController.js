const { Comment} = require('../models');

const commentsController = {
getComments: async(req,res) => {
    try { 
      const comments = await Comment.findAll();
    res.json(comments)
  } catch (error) {
    res.status(500).send("Server error")
}
  },
  createComment : async (req,res,next) => {
    try {
      console.log(req)
   const { name, email, message, id } = req.body
    const newcomment = await Comment.create({
      name : name,
      email :email,
      message : message,
      article_id : id,
  })
  res.json("Your comment has been posted")
} catch (error) {
    res.status(500).send("Server")
   }
  },

  removeComment: async (req, res) => {
    console.log(req.params)
    const id = parseInt(req.params.id,10);
    if (isNaN(id)) {
      return res.send("Invalid list id")
    }
    try {
      const removedComment = await Comment.destroy({
        where: {
          id: id
        }
      })
      if (removedComment !== undefined) {
       res.json("Comment removed")
      } else {
        res.send("Nothing has been removed")
      }

    } catch (error) {
      res.status(500).send("Server error")
    }
  },
}
module.exports = commentsController;
