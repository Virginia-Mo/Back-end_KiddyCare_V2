const { localsName } = require('ejs');
const {
    Message,
    Classbooking,
    NewsletterRequest
} = require('../models');

const adminController = {
    getMessage: async (req, res, next) => {
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
                res.locals.messageContact = 'Thank you for your message, we\'ll reply to you as soon as possible !';
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
    getMessagePage: async (req, res) => {
        try {
            const messages = await Message.findAll();
            res.render("user/message", {
                messages
            })

        } catch (error) {
            res.status(500).send("Server error")
        }
    },

    getBooking: async (req, res,next) => {
        try { 
            const bookingData = req.body;

            const newbooking = await Classbooking.create({
                name: bookingData.name,
                email: bookingData.email,
                class: bookingData.class,
                user_id: 1,
            });
            if (newbooking !== undefined) {
            res.locals.messageBooking = 'Thank you for your subscription, we\'ll get back to you soon!';
               next()
            }
        } catch (error) {
            res.status(500).send("Server error")
        }
    },
    removeBooking: async (req, res) => {
      const id = +req.params.id;
      if (isNaN(id)) {
        return res.send("Invalid list id")
      }
        try {
            const removedBooking = await Classbooking.destroy({
                where: {
                    id: id
                }
            })
            if (removedBooking !== undefined) {
                res.redirect("/admin/classbooking")
            } else {
                res.send("Nothing has been removed")
              }
            
        } catch (error) {
            res.status(500).send("Server error")
        }
    },
    getBookingPage: async (req, res) => {
        try {
            const bookings = await Classbooking.findAll();

            res.render("user/booking", {
                bookings
            })

        } catch (error) {
            res.status(500).send("Server error")
        }
    },

    getNewsLetterRequest: async (req, res, next) => {
        try {
            const requestData = req.body;
        if (!requestData.nameRequest || !requestData.emailRequest) {
                return res.redirect("/")
              }
            const newrequest = await NewsletterRequest.create({
                name: requestData.nameRequest,
                email: requestData.emailRequest,
                user_id: 1,
            })

         if (newrequest !== undefined){ 
            res.locals.message = 'Thank you, you\'ll get our newsletter soon !';
             next()}
            
        } catch (error) {
            res.status(500).send("Server error")
        }
    },
    removeNewsletterRequest: async (req, res) => {
      const id = +req.params.id;
      if (isNaN(id)) {
        return res.send("Invalid list id")
      }
        try {
            const removedNewsletterRequest = await NewsletterRequest.destroy({
                where: {
                    id: id
                }
            })
            if (removedNewsletterRequest !== undefined) {
                res.redirect("/admin/newsletter")
            } else {
                res.send("Nothing has been removed")
              }
            
        } catch (error) {
            res.status(500).send("Server error")
        }
    },
    getNewsletterRequestPage: async (req, res) => {
        try {
            const requests = await NewsletterRequest.findAll();
            res.render("user/newsletter", {
                requests
            })

        } catch (error) {
            res.status(500).send("Server error")
        }
    }, 

};
module.exports = adminController;