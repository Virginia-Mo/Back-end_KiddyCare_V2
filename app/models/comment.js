const {DataTypes, Model} = require("sequelize");
const sequelize = require("../database");
const Article = require("./article");

class Comment extends Model{}
Comment.init({
  name:{
    type: DataTypes.TEXT
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, 
    }
  },
  message : {
    type: DataTypes.TEXT
  },
  article_id : {
      type : DataTypes.TEXT
  }
}, {
  sequelize,
  tableName: "comment"
});
module.exports = Comment;