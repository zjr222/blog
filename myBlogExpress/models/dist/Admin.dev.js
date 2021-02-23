"use strict";

var sequelize = require("./db");

var _require = require("sequelize"),
    DataTypes = _require.DataTypes; //创建一个模型对象


var Admin = sequelize.define("Admin", {
  loginId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  loginPwd: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  createdAt: false,
  updatedAt: false,
  paranoid: true //从此以后，该表的数据不会真正的删除，而是增加一列deletedAt，记录删除的时间

});
module.exports = Admin;