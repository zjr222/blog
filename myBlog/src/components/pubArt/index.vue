<template>
  <div class="content">
    <div class="add-title">
      <p>文章标题：</p>
      <el-input v-model="title" placeholder="请输入内容"></el-input>
    </div>
    <div class="add-tag">
      <p>标签：</p>
      <el-input v-model="tag" placeholder="请输入内容"></el-input>
    </div>
    <div class="blog-list">
      <div class="editor"></div>

      <div class="btn">
        <el-button @click="submit">提交</el-button>
        <el-button>清空</el-button>
      </div>
    </div>
    <div class="info-wrap">
      <p>已有标签：</p>
      <span></span>
    </div>
  </div>
</template>
<script>
import E from "wangEditor";
export default {
  data() {
    return {
      title: "",
      tag: "",
      html: "",
    };
  },
  created() {},
  mounted() {
    let self = this;
    const editor = new E(".editor");
    editor.config.height = 300;
    editor.config.onchange = function (oldHtml) {
      const reg = /<\/?.+?>/g;
      const newHtml = oldHtml.replace(reg, "");
      self.html = newHtml;
    };
    editor.create();
  },
  methods: {
    submit() {
      const body = {
        "blogTitle": this.title,
        "blogCont": this.html,
        "blogCreateTime": new Date().toLocaleDateString(),
        "blogTag": this.tag,
      };
      console.log(body)
      this.$axios.post("/api/createBlog", body).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
<style scoped>
@import "../../assets/css/admin//pubArt.css";
</style>