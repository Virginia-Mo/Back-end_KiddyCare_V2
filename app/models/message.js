const { DataTypes, Model} = require("sequelize");
const sequelize = require("../database");
const User = require("./user");

class Message extends Model{}
Message.init({
  name: {
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
  subject : {
    type: DataTypes.TEXT
  },
  message : {
    type: DataTypes.TEXT
  },
  user_id : {
    type : DataTypes.INTEGER,
    references : {
      model : User,
      key: "id" ,
    }
  }
}, {
  sequelize,
  tableName: "message"
});
module.exports = Message;