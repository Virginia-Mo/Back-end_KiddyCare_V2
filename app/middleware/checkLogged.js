const checkedLogged = (req,res,next) => { 
  const role = req.headers["role"]
  console.log("ROLE" + role)
if (role === "admin" || role === "teacher"){
  next();
} else {
  console.log("NOPE")
}
}

module.exports = checkedLogged;