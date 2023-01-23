const {User, Article} = require('../models');
const bcrypt = require('bcrypt');

const userController = {
    login(req, res) {
        res.render("login");
    },

    checkin: async (req,res) => {
        try {
        const userData = req.body;

        let error ='';
        if (userData.email == '') {
            error = "Email required";
            
        } else if (req.body.password == '') {
            error = "Password required"
            res.json({
                error: error,
            })
            
        }

        if (!error) {
            let user;
            user = await User.findOne({ where: { email: userData.email }});
         
        if (!user) {
                error = "Wrong password or email"
                res.json({
                    error: error,
                })
                return
        }
       const checkPwd = await bcrypt.compare(req.body.password, user.password);
   
        if (!checkPwd) {
                error = "Wrong password or email"
        }

        if (!error) {
                req.session.user = user;
                delete req.session.password;
                console.log(req.session.user)
                res.json("Logged")
        } else {
             res.render("login", {
                    error: error,
                })
                return
        }
       
       } 
        
    } catch (error) {
        res.status(500).send("Server Error")
    }
    },
    logout: async (req,res) => {
        delete req.session.user;
        const articles = await Article.findAll({
          include : ["tag", "comments"],
          limit : 3, 
          order : [['createdAt', 'DESC']], 
          });
        res.json({articles});
      },
}


module.exports = userController;