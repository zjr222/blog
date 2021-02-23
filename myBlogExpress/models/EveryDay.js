const sequelize = require("./db");
const {
    DataTypes
} = require("sequelize");
//创建一个模型对象
const EveryDay = sequelize.define(
    "EveryDay", {
        day: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        month: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        chinese: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        english: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        createdAt: false,
        updatedAt: false,
        paranoid: true //从此以后，该表的数据不会真正的删除，而是增加一列deletedAt，记录删除的时间
    }
);

module.exports = EveryDay;