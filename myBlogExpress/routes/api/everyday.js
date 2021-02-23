const express = require('express');
const router = express.Router();
const everyServ = require('../../services/everyServ');
const {
    asyncHandler
} = require("../midware/getSendResult");


router.get('/everyday', asyncHandler(async (res, req) => {
    const result = await everyServ.getSentence(1);
    if (result) {
        return result;
    }

}))


module.exports = router;