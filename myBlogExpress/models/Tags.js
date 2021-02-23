const sequelize = require("./db");
const {
    DataTypes
} = require("sequelize");

const Tags = sequelize.define("tag", {
    "tag": {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "其他"
    },
    "visits": {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    "BlogId": {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    createdAt: false,
    updatedAt: false,
    paranoid: true //从此以后，该表的数据不会真正的删除，而是增加一列deletedAt，记录删除的时间
})

module.exports = Tags;