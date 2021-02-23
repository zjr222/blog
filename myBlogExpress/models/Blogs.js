const sequelize = require("./db");
const {
    DataTypes
} = require("sequelize")

const Blogs = sequelize.define("Blog", {
    "BlogId": {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    "blogTitle": {
        type: DataTypes.STRING,
        allowNull: true,
    },
    "blogTag":{
        type:DataTypes.STRING,
        allowNull:true
    },
    "blogCont": {
        type: DataTypes.STRING,
        allowNull: true
    },
    "blogCreateTime": {
        type: DataTypes.DATEONLY,
        allowNull: true
    },

}, {
    createdAt: false,
    updatedAt: false,
    paranoid: true //从此以后，该表的数据不会真正的删除，而是增加一列deletedAt，记录删除的时间
})

module.exports = Blogs;