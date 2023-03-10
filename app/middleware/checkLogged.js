const checkedLogged = (req,res,next) => {
    if (!req.session.user) {
        res.redirect("/login");
        return;
    } 
    res.locals.user = req.session.user;
    next();
}

module.exports = checkedLogged;