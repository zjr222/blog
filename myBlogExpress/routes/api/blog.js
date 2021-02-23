const express = require('express');
const router = express.Router();
const blogServ = require('../../services/blogServ');
const {
    asyncHandler
} = require("../midware/getSendResult");


router.post('/createBlog', asyncHandler(async (req, res) => {
    const result = await blogServ.createBlog({
        "blogTitle": req.body.blogTitle,
        "blogTag": req.body.blogTag,
        "blogCont": req.body.blogCont,
        "blogCreateTime": req.body.blogCreateTime
    });
    if (result) {
        return result;
    }
}))
router.get('/getBlog', asyncHandler(async (res, req) => {
    const result = await blogServ.getBlog();
    if (result) {
        return result;
    }
}))

module.exports = router;