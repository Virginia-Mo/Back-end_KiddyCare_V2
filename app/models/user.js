const {DataTypes, Model} = require("sequelize");
const sequelize = require("../database");

class User extends Model{}
User.init({
  name: DataTypes.TEXT,
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, 
    }
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: "user"
});
    
    
module.exports = User;


