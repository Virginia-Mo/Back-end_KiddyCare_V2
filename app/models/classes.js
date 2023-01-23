const {DataTypes, Model} = require("sequelize");
const sequelize = require("../database");

class Classes extends Model{}
Classes.init({
  img:{
    type: DataTypes.TEXT
  },
  name:{
    type: DataTypes.TEXT
  },
  short_description:{
    type: DataTypes.TEXT
  },
  age:{
    type: DataTypes.TEXT
  },
  seats:{
    type: DataTypes.INTEGER
  },
  hours:{
    type: DataTypes.TEXT
  },
  price:{
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  tableName: "classes"
});
module.exports = Classes;