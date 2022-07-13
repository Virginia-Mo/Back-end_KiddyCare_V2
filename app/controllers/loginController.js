const User = require('../models/user');
const bcrypt = require('bcrypt');

const userController = {
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
        
        if (!error) {
            let user;
            user = await User.findOne({ where: {
                    email: userData.email
                }
            })
        if (!user) {
                error = "Wrong password or email"
        }

         const checkPwd = await bcrypt.compare(req.body.password, user.password);
         console.log(checkPwd)
        if (!checkPwd) {
                error = "Wrong password or email"
        }

        if (!error) {
                req.session.user = user;
                delete req.session.password;
                console.log(req.session.user)
                res.redirect("/user")
        } else {
                res.render("login", {
                    error: error,
                    data: userData
                })
            }
        }
    }
}


module.exports = userController;