const sequelize = require("./db");
const {
    DataTypes
} = require("sequelize");

const Comment = sequelize.define("comment", {
    "cmtMsg": {
        type: DataTypes.STRING,
        allowNull: false
    },
    "cmtTime": {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    "name": {
        type: DataTypes.STRING,
        allowNull: false
    },
    "email": {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    createdAt: false,
    updatedAt: false,
    paranoid: true
})

module.exports = Comment;