const { NewsletterRequest } = require('../models')

const newsletterController = {
    getNewsletter: async(req,res) => {
        try { 
          const newsletter = await NewsletterRequest.findAll();
        res.json(newsletter)
      } catch (error) {
        res.status(500).send("Server error")
    }
      },
    createNewsLetter: async (req, res, next) => {
        try {
            const requestData = req.body;
        if (!requestData.nameRequest || !requestData.emailRequest) {
               res.json("Try again") 
               return 
              }
            const newrequest = await NewsletterRequest.create({
                name: requestData.nameRequest,
                email: requestData.emailRequest,
                user_id: 1,
            })
  
         if (newrequest !== undefined){ 
            res.json('Thank you, you\'ll get our newsletter soon !');
             next()}
            
        } catch (error) {
            res.status(500).send("Server error")
        }
      },
      removeNewsletterRequest: async (req, res) => {
        const id = +req.params.id;
        if (isNaN(id)) {
          return res.json("Invalid list id")
        }
          try {
              const removedNewsletterRequest = await NewsletterRequest.destroy({
                  where: {
                      id: id
                  }
              })
              if (removedNewsletterRequest !== undefined) {
                  res.json("Successfully removed")
              } else {
                  res.send("Nothing has been removed")
                }
              
          } catch (error) {
              res.status(500).send("Server error")
          }
      },
}
module.exports = newsletterController;