const {DataTypes, Model} = require("sequelize");
const sequelize = require("../database");

class NewsletterRequest extends Model{}
NewsletterRequest.init({
  name: DataTypes.TEXT,
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, 
    }
  },
  user_id : {
    type : DataTypes.INTEGER,
    references : {
      model : User,
      key: id ,
    }
  }
}, {
  sequelize,
  tableName: "newsletterRequest"
});
module.exports = NewsletterRequest;