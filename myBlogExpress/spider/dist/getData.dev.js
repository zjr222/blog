"use strict";

/**
 * 抓取每日一句的信息
 */
var axios = require("axios")["default"];

var cheerio = require("cheerio");

var Book = require("../models/Book");
/**
 * 获取网页源代码
 */


function getEveryDay() {
  var result;
  return regeneratorRuntime.async(function getEveryDay$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://web.shanbay.com/op/quotes/today"));

        case 2:
          result = _context.sent;
          return _context.abrupt("return", result.data);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}

function getMessage() {
  var html, $;
  return regeneratorRuntime.async(function getMessage$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(getEveryDay());

        case 2:
          html = _context2.sent;
          $ = cheerio.load(html);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}
/**
 * 得到每日一句信息，然后保存到数据库
 */
// async function saveToDB() {
//     const books = await getMessage();
//     await Book.bulkCreate(books);
//     console.log("抓取数据并保存到了数据库");
// }


setInterval(saveToDB, 60 * 60 * 24);