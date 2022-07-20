const {DataTypes, Model} = require("sequelize");
const sequelize = require("../database");
const User = require("./user");

class NewsletterRequest extends Model{}
NewsletterRequest.init({
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
}, {
  sequelize,
  tableName: "newsletterRequest"
});
module.exports = NewsletterRequest;