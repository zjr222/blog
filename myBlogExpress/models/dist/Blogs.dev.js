"use strict";

var sequelize = require("./db");

var _require = require("sequelize"),
    DataTypes = _require.DataTypes;

var Blog = sequelize.define("Blog", {
  "blogTitle": {
    type: Datatypes.STRING,
    allowNull: false
  },
  "blogCont": {
    type: Datatypes.STRING,
    allowNull: false
  },
  "blogCreateTime": {
    type: DataTypes.DATE,
    allowNull: false
  }
});