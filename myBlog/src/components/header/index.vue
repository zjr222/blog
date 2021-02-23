<template>
  <div class="header">
    <div class="avtor">
      <img class="person" src="../../assets/img/person.jpg" alt="" />
      <span>ZJR — 个人交流学习博客</span>
    </div>
    <div class="search">
      <el-input maxlength="35" v-model="search">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <div class="list">
      <ul class="list-items">
        <li>
          <router-link to="/">
            <span class="common">
              <i class="el-icon-s-home active"></i>
              主页
            </span>
          </router-link>
        </li>
        <li>
          <el-dropdown class="dropdown">
            <span class="el-dropdown-link" ref="echarType">
              <span class="common">
                <i class="el-icon-menu"></i>
                分类
                <i class="el-icon-caret-bottom"></i>
              </span>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link class="common" to="/daily">
                  <span>日常</span>
                </router-link>
              </el-dropdown-item>
              <el-dropdown-item @click.native="note" class="common">
                <router-link to="/note">
                  <span>笔记</span>
                </router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
        <li>
          <span class="tag">
            <span class="common">
              <i class="el-icon-s-flag"></i>
              标签
            </span>
          </span>
        </li>
        <li>
          <router-link to="/timeline">
            <span class="common">
              <i class="el-icon-time"></i>
              时间轴
            </span>
          </router-link>
        </li>
        <li>
          <router-link to="/commentBoard">
            <span class="common">
              <i class="el-icon-chat-line-square"></i>
              评论
            </span>
          </router-link>
        </li>
        <li>
          <el-dropdown class="dropdown">
            <span class="el-dropdown-link" ref="Type">
              <span class="common">
                <i class="el-icon-coffee-cup"></i>
                关于
                <i class="el-icon-caret-bottom"></i>
              </span>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <router-link to="/aboutself">关于博主</router-link>
              </el-dropdown-item>
              <el-dropdown-item @click.native="note" class="common">
                <router-link to="/commentBoard">
                  <span>留言板</span>
                </router-link>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      search: "",
    };
  },
};
</script>
<style scoped>
@import "../../assets/css/header/index.css";
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>