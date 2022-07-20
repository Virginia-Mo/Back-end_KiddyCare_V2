const { DataTypes, Model }  = require("sequelize");
const sequelize = require("../database"); 
const { Tag, User } = require("../models");

class Article extends Model{}
Article.init({
  maintitle : {
   type :  DataTypes.TEXT
  },
  main_img : {
    type : DataTypes.TEXT
  },
  introduction : {
    type : DataTypes.TEXT
  },
  title1 : {
    type : DataTypes.TEXT
  } ,
  img1 : {
    type : DataTypes.TEXT
  } ,
  description1 : {
    type : DataTypes.TEXT
  } ,
  title2 : {
    type : DataTypes.TEXT
  } ,
  img2 : {
    type : DataTypes.TEXT
  } ,
  description2 : {
    type : DataTypes.TEXT
  } ,
  author_img : {
    type : DataTypes.TEXT
  },
  authorname : {
    type : DataTypes.TEXT
  },
  authorjob: {
    type : DataTypes.TEXT
  },
}, {
  sequelize,
  tableName: "article"
});
    
    
module.exports = Article;
