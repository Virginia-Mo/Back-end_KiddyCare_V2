const User = require("./user");
const Article = require("./article");
const Message = require("./message");
const NewsletterRequest = require("./newsletterRequest");
const Classbooking = require("./classbooking");
const Tag = require("./tag");
const Comment = require("./comment");

User.hasMany(Article,{
  as :"article",
  foreignKey : "user_id",
});
Article.belongsTo(User,{
  as :"user",
  foreignKey : "user_id",
});
User.hasMany(Message,{
  as :"message",
  foreignKey : "user_id",
});
Message.belongsTo(User,{
  as :"user",
  foreignKey : "user_id",
});
User.hasMany(NewsletterRequest,{
  as :"newsletterRequest",
  foreignKey : "user_id",
});
NewsletterRequest.belongsTo(User,{
  as :"user",
  foreignKey : "user_id",
});
User.hasMany(Classbooking,{
  as :"classbooking",
  foreignKey : "user_id",
});
Classbooking.belongsTo(User,{
  as :"user",
  foreignKey : "user_id",
});
Article.hasMany(Comment,{
  as :"comments",
  foreignKey : "article_id",
});
Comment.belongsTo(Article,{
  as :"article",
  foreignKey : "article_id",
});
Tag.hasMany(Article, {
  as : "article",
  foreignKey : "tag_id",

});
Article.belongsTo(Tag, {
  as : "tag",
  foreignKey : "tag_id",
});
module.exports = { User, NewsletterRequest, Message, Classbooking, Tag, Article, Comment};


