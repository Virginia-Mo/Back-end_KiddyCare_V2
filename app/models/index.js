const NewsletterRequest = require("./newsletterRequest");
const Article = require("./article");
const Classbooking = require("./classbooking");
const Message = require("./message");
const User = require("./user");

User.hasMany(Article,{
  as :"article"
});
Article.belongsTo(User,{
  as :"user"
});
User.hasMany(Message,{
  as :"message"
});
Message.belongsTo(User,{
  as :"user"
});
User.hasMany(NewsletterRequest,{
  as :"newsletterRequest"
});
NewsletterRequest.belongsTo(User,{
  as :"user"
});
User.hasMany(Classbooking,{
  as :"classbooking"
});
Classbooking.belongsTo(User,{
  as :"user"
});

module.exports = { User, Article, Classbooking, Message, NewsletterRequest };


