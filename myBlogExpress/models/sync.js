// 同步所有模型
require("./Admin");
require("./Blogs");
require("./Comment");
require("./Tags");
require("./EveryDay");
const sequelize = require("./db");
sequelize.sync({
    alter: true
}).then(() => {
    console.log("所有模型同步完成");
});