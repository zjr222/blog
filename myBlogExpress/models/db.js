const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("my-blog", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
