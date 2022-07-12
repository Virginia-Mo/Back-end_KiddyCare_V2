const {DataTypes, Model} = require("sequelize");
const sequelize = require("../database");

class Message extends Model{}
Message.init({
  name: DataTypes.TEXT,
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, 
    }
  },
  subject : DataTypes.TEXT,
  message : DataTypes.TEXT,
  user_id : {
    type : DataTypes.INTEGER,
    references : {
      model : User,
      key: id ,
    }
  }
}, {
  sequelize,
  tableName: "message"
});
module.exports = Message;