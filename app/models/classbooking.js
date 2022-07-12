const {DataTypes, Model} = require("sequelize");
const sequelize = require("../database");

class Classbooking extends Model{}
Classbooking.init({
  name: DataTypes.TEXT,
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, 
    }
  },
  class : DataTypes.TEXT,
  user_id : {
    type : DataTypes.INTEGER,
    references : {
      model : User,
      key: id ,
    }
  }
}, {
  sequelize,
  tableName: "classbooking"
});
module.exports = Classbooking;