const EveryDay = require("../models/EveryDay");


exports.getSentence = async function(id){
    const result = await EveryDay.findByPk(id);
    if(result){
        return result.toJSON();
    }
}


