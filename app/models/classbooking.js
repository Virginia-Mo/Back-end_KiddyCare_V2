const {DataTypes, Model} = require("sequelize");
const sequelize = require("../database");
const User = require("./user");

class Classbooking extends Model{}
Classbooking.init({
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
  class : {
    type: DataTypes.INTEGER,
  },
  user_id : {
    type : DataTypes.INTEGER,
    references : {
      model : User,
      key: 'id' ,
    }
  }
}, {
  sequelize,
  tableName: "classbooking"
});
module.exports = Classbooking;