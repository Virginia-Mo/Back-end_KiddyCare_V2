const sanitizer = require("sanitizer");


const sanitize = function (obj) {
  for (const prop in obj) {
    obj[prop] = sanitizer.escape(obj[prop]); 
  }
};

const middleware = function (req,res,next) {
  sanitize(req.params);
  sanitize(req.query);
  if (req.body){
    sanitize(req.body);
  }
  next();
};

module.exports = middleware;