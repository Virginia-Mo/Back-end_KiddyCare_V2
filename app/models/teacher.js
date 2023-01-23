const {DataTypes, Model} = require("sequelize");
const sequelize = require("../database");

class Teacher extends Model{}
Teacher.init({
  img:{
    type: DataTypes.TEXT
  },
  name: {
    type: DataTypes.TEXT
  },
  job: {
    type: DataTypes.TEXT,
  },
}, {
  sequelize,
  tableName: "teacher"
});  
module.exports = Teacher;