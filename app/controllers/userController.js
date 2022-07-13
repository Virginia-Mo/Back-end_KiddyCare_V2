const userController = {
    getPage (req,res){
        res.render("user/user");
    },
    logout (req,res) {
     delete req.session.user;
     res.redirect("/")
 }}

module.exports = userController;