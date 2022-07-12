const {DataTypes, Model} = require("sequelize");
const sequelize = require("../database"); 

class Article extends Model{}
Article.init({
  mainImg : DataTypes.BYTEA,
  introduction : DataTypes.TEXT,
  title1 : DataTypes.TEXT,
  img1 : DataTypes.BYTEA,
  description1 : DataTypes.TEXT,
  title2 : DataTypes.TEXT,
  img2 : Datatypes.BYTEA,
  description2 : DataTypes.TEXT,
  user_id : {
    type : DataTypes.INTEGER,
    references : {
      model : User,
      key: id ,
    }
  }
}, {
  sequelize,
  tableName: "article"
});
    
    
module.exports = Article;
