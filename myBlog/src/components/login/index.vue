<template>
  <div class="login">
    <div class="describe">
      <span id="ani" class="animated slideInLeft ani">Welcome to Login</span>
      <span class="back">
        <router-link to="/index">回到首页</router-link>
      </span>
    </div>
    <div class="login-container">
      <div class="login-box">
        <div class="form">
          <div class="login-id">
            <el-input
              placeholder="请输入账号"
              prefix-icon="el-icon-user-solid"
              v-model="account"
            >
            </el-input>
          </div>
          <div class="login-pwd">
            <el-input
              placeholder="请输入密码"
              prefix-icon="el-icon-lock"
              v-model="pwd"
            >
            </el-input>
          </div>
          <div class="captcha">
            <Captcha ref="change" @changeData="getData" />
          </div>
          <div class="btn">
            <el-button class="button" :plain="true" type="warning" @click="login"
              >登录</el-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Captcha from "@/components/captcha/index.vue";
export default {
  data() {
    return {
      account: "",
      pwd: "",
      flag: false,
      captcha: "",
    };
  },
  components: {
    Captcha,
  },
  created() {},
  methods: {
    //获取子组件数据
    getData(data) {
      this.captcha = data;
    },
    //登录
    login() {
      // console.log(this.account, this.pwd, this.captcha);
      const body = {
        loginId: this.account,
        loginPwd: this.pwd,
        captcha: this.captcha,
      };
      this.$axios.post("/api/login", body).then((res) => {
        // console.log(res,typeof res.status);
        if (res.status === 200) {
          // 验证成功返回值为200进入主页面
          this.$message({
            message: "登录成功",
            type: "success",
            duration:'1000'
          });
          this.$router.push("/admin-manage");
        } else {
          // 验证出错误时重新更新验证码
          this.$refs.change.changeImg();
        }
      });
    },
  },
};
</script>
<style scoped>
@import "../../assets/css/login/index.css";
</style>