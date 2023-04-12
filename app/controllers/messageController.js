const { Message} = require("../models");

const messageController = {
    getMessage: async (req, res) => {
        try {
            const messages = await Message.findAll();
            res.json(messages)
  
        } catch (error) {
            res.status(500).send("Server error")
        }
    },
    createMessage: async (req, res, next) => {
        try {
            const messageData = req.body;
    
            const newMessage = await Message.create({
                name: messageData.name,
                email: messageData.email,
                subject: messageData.subject,
                message: messageData.contact__message,
                user_id: 1,
            });
            if (newMessage !== undefined) {
                res.json('Thank you for your message, we\'ll reply to you as soon as possible !');
                next();
            }
        } catch (error) {
            res.status(500).send("Server error")
        }
    },  
    removeMessage: async (req, res) => {
        const id = +req.params.id;
        if (isNaN(id)) {
          return res.send("Invalid list id")
        }
          try {
              const removedMessage = await Message.destroy({
                  where: {
                      id: id
                  }
           })
          if (removedMessage !== undefined) {
              res.redirect("/admin/message")
            } else {
                  res.send("Nothing has been removed")
                }
          } catch (error) {
              res.status(500).send("Server error")
          }
      },
}
module.exports = messageController;