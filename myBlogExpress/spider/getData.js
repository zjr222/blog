/**
 * 抓取每日一句的信息
 */
const axios = require("axios").default;
const cheerio = require("cheerio");
const EveryDay = require("../models/EveryDay");

/**
 * 获取网页源代码
 */
async function getEveryDay() {
    const result = await axios.get("https://web.shanbay.com/op/quotes/today");
    return result.data;
}


async function getMessage() {
    const html = await getEveryDay();
    const $ = cheerio.load(html);
    const day = new Date().getDate();
    const month = new Date().toDateString().split(" ")[1];
    const year = new Date().getFullYear();
    const english = $(".quote .content").text();
    const chinese = $(".quote .translation").text();
    const author = $(".quote .author").text();
    return {
        day,
        month,
        year,
        chinese,
        english,
        author
    }
}


/**
 * 得到每日一句信息，然后保存到数据库
 * num更新信息的次数
 */
let num = 0;
async function saveToDB() {
    const msg = await getMessage();
    await EveryDay.create(msg);
    num ++;
    console.log("抓取数据并保存到了数据库");
}
if(num < 1){
    saveToDB()
}
setInterval(saveToDB, 60 * 60 * 24);