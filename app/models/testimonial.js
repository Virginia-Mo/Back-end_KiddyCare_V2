const {DataTypes, Model} = require("sequelize");
const sequelize = require("../database");

class Testimonial extends Model{}
Testimonial.init({
  img:{
    type: DataTypes.TEXT
  },
  name: {
    type: DataTypes.TEXT,
  },
  message : {
    type: DataTypes.TEXT
  }
}, {
  sequelize,
  tableName: "testimonial"
});
module.exports = Testimonial;