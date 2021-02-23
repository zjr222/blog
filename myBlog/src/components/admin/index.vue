<template>
  <div class="admin-manage">
    <header>
      <div class="left">
        <span class="logo">Manage</span>
        <span class="text">后台管理</span>
      </div>
      <div class="right">
        <ul>
          <li>
            <router-link to="/index">
              <i class="el-icon-s-home color icon"></i>
              <span class="color">首页</span>
            </router-link>
          </li>
          <li class="color">
            <span>
              <i class="el-icon-chat-dot-round icon"></i>
              消息
            </span>
          </li>
          <li>
            <img class="person" src="../../assets/img/person.jpg" alt="" />
            <el-dropdown class="dropdown">
              <span class="el-dropdown-link personname">
                {{ `zjr222` }}
              </span>
              <i class="el-icon-caret-bottom dropdown color"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <router-link class="black" to="">
                    <span class="black">人员管理</span>
                  </router-link>
                </el-dropdown-item>
                <el-dropdown-item @click.native="note">
                  <router-link to="" class="black">
                    <span class="black">退出登录</span>
                  </router-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </header>
    <main>
      <aside>
        <div class="items">
          <ul>
            <li class="active">
              <i class="el-icon-set-up"></i>
              <router-link :to="{ name: 'artManage' }">
                <span>文章管理</span>
              </router-link>
            </li>
            <li>
              <i class="el-icon-set-up"></i>
              <router-link :to="{ name: 'comManage' }">
                <span>评论管理</span>
              </router-link>
            </li>
            <li>
              <i class="el-icon-set-up"></i>
              <router-link :to="{ name: 'pubArt' }">
                <span>发布文章</span>
              </router-link>
            </li>
          </ul>
        </div>
      </aside>
      <div class="content">
        <router-view />
      </div>
    </main>
  </div>
</template>
<script>
// import ActManage from "../../components/artManage/index";
// import PubArt from "../../components/pubArt/index";
// import ComManage from "../../components/comManage/index";
export default {
  data() {
    return {};
  },
//   components: {
//     ActManage,
//     PubArt,
//     ComManage,
//   },
};
</script>
<style scoped>
@import "../../assets/css/admin/index.css";
</style>