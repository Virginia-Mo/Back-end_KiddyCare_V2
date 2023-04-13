const {User, Article} = require('../models');
const bcrypt = require('bcrypt');
// const { Error } = require('sequelize/types');

const userController = {

    checkin: async (req,res) => {
        try {
        const userData = req.body;
        let error ='';
        if (userData.email == '') {
            error = "Email required";
            return  res.status(400).send("Required" )
            
        } else if (req.body.password == '') {
            error = "Password required"
            return  res.status(400).send("Required" )
        }
        if (!error) {
            let user;
            user = await User.findOne({ where: { email: userData.email }});
         
        if (!user) {
          return  res.status(400).json("Wrong password or email" )
        }
       const checkPwd = await bcrypt.compare(req.body.password, user.password);
   
        if (!checkPwd) {
            error = "Wrong password or email"
           return  res.status(400).json("Wrong password or email" )
        }
        if (!error) {

            // req.session.user.password.destroy();
            // console.log(`SESSION :  ${req.session.user}, USER :  ${user}`)
            req.session.user = user; 
            res.json({role : user.role, id:user.id})
            
        } else {
             res.json(error)
            return
        }
       } 
        
    } catch (error) {
        res.status(500).send("Server Error")
    }
    },
    logout: async (req,res) => {
        req.session.destroy()
        res.json({message : "You've been logged out"});
      },
}


module.exports = userController;