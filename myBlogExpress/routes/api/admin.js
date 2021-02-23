const express = require('express');
const router = express.Router();
const adminServ = require('../../services/adminServ');
const {
    asyncHandler
} = require("../midware/getSendResult");
// const jwt = require("../midware/jwt");


// adminServ.addAdmin({
//     loginId:'123',
//     loginPwd:'123'
// })



router.post(
    "/login",
    asyncHandler(async (req, res) => {
        const result = await adminServ.login(req.body.loginId, req.body.loginPwd);
        if (result) {
            let value = result.id;
            // jwt.publish(res, undefined, {
            //     id: value
            // });
        }
        return result;
    })
);

module.exports = router;