const { Classbooking } = require('../models');

const classbookingController = {
    getBookingClass: async(req,res) => {
        try {
          const bookingclass = await Classbooking.findAll();
        res.json(bookingclass)
      } catch (error) {
        res.status(500).send("Server error")
    }
      },
    createBookingClass: async (req, res,next) => {
        try { 
            const bookingData = req.body;
          console.log("creater")
            const newbooking = await Classbooking.create({
                name: bookingData.name,
                email: bookingData.email,
                class: bookingData.classBooked,
                user_id: 1,
            });
            if (newbooking !== undefined) {
            res.json('Thank you for your subscription, we\'ll get back to you soon!');
               next()
            }
        } catch (error) {
            res.status(500).send("Server error")
        }
    },
    removeBooking: async (req, res) => {
        const id = +req.params.id;
          try {
              const removedBooking = await Classbooking.destroy({
                  where: {
                      id: id
                  }
              })
              if (removedBooking !== undefined) {
                  res.json("The booking has been removed")
              } else {
                  res.send("Nothing has been removed")
                }
              
          } catch (error) {
              res.status(500).send("Server error")
          }
      },
}
module.exports = classbookingController;