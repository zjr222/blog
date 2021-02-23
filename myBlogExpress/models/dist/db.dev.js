"use strict";

var _require = require("sequelize"),
    Sequelize = _require.Sequelize;

var sequelize = new Sequelize("myblog", "root", "root", {
  host: "localhost",
  dialect: "mysql"
});
module.exports = sequelize;