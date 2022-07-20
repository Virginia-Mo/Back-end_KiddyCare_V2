const {
    Message,
    Classbooking,
    NewsletterRequest
} = require('../models');

const adminController = {
    getMessage: async (req, res) => {
        try {
            const messageData = req.body;
            const newMessage = await Message.create({
                name: messageData.name,
                email: messageData.email,
                subject: messageData.subject,
                message: messageData.contact__message,
                user_id: 1,
            });
            if (newMessage) {
                res.redirect("/contact")
            }
        } catch (error) {
            res.status(500).send("Server error")
        }
    },
    removeMessage: async (req, res) => {
        const id = req.params.id;
        try {
            const removedMessage = await Message.destroy({
                where: {
                    id: id
                }
         })
        if (removedMessage) {
            res.redirect("/user")
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
            console.log(bookingData)

            const newbooking = await Classbooking.create({
                name: bookingData.name,
                email: bookingData.email,
                class: bookingData.class,
                user_id: 1,
            });
            console.log(newbooking)
            if (newbooking) {
                next()
            }
        } catch (error) {
            res.status(500).send("Server error")
        }
    },
    removeBooking: async (req, res) => {
        const id = req.params.id;
        try {
            const removedBooking = await Classbooking.destroy({
                where: {
                    id: id
                }
            })
            if (removedBooking) {
                res.redirect("/user")
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

    getNewsLetterRequest: async (req, res) => {
        try {

            const requestData = req.body;
            const newrequest = await NewsletterRequest.create({
                name: requestData.nameRequest,
                email: requestData.emailRequest,
                user_id: 1,
            })

            if (newrequest) {
               res.redirect("/")
            }
        } catch (error) {
            res.status(500).send("Server error")
        }
    },
    removeNewsletterRequest: async (req, res) => {
        const id = req.params.id;
        try {
            const removedNewsletterRequest = await NewsletterRequest.destroy({
                where: {
                    id: id
                }
            })
            if (removedNewsletterRequest) {
                const requests = await NewsletterRequest.findAll();
                res.redirect("/user")
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