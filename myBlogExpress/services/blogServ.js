const Blog = require("../models/Blogs");


exports.createBlog = async function (blogObj) {
    const result = await Blog.create(blogObj);
    return result.toJSON();
}

exports.getBlog = async function () {
    const result = await Blog.findAll();
    return result;
}

