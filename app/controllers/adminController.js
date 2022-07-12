const User = require('../models/user');
const bcrypt = require('bcrypt');

const adminController = {
    login(req, res) {
        res.render("login");
    },

    checkin: async (req,res) => {
        const userData = req.body;

        let error ='';
        if (!userData.email) {
            error = "Email required"
        } else if (!userData.password) {
            error = "Password required"
        }
        let admin;
        if (!error) {
            admin = await User.findOne({ where: {
                    email: userData.email
                }
            })
        if (!admin) {
                error = "Wrong password or email"
        }

         const checkPwd = await User.findOne({ where: {
                password: userData.password
            }})
        if (!checkPwd) {
                error = "Wrong password or email"
        }

        if (!error) {
                req.session.admin = admin;
                res.redirect("home")
        } else {
                res.render("login", {
                    error: error,
                    data: userData
                })
            }
        }
    }
}


module.exports = adminController;