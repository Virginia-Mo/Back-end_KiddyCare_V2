const {DataTypes, Model} = require("sequelize");
const sequelize = require("../database");

class Gallery extends Model{}
Gallery.init({
  name: {
    type: DataTypes.TEXT
  },
  img: {
    type: DataTypes.TEXT
  },
  category: {
    type: DataTypes.TEXT
  },
}, {
  sequelize,
  tableName: "gallery"
});
    
    
module.exports = Gallery;


