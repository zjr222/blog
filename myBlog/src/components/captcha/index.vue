<template>
  <div class="captcha">
    <img id="captcha" @click="changeImg" :src="imgData" alt="" />
    <input
      type="text"
      v-model="val"
      @change="changeData"
      placeholder="输入验证码"
    />
  </div>
</template>
<script>
// import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      val: "",
      imgData: "",
      baseUrl: "http://localhost:5050",
      flash: false,
    };
  },
  computed: {
    // ...mapState(["captcha"]),
  },
  created() {
    this.imgData = this.baseUrl + "/captcha" + "?" + Math.random();
  },
  methods: {
    changeData() {
      this.$emit("changeData", this.val);
    },
    changeImg() {
      this.imgData = this.baseUrl + "/captcha" + "?" + Math.random();
    },
  },
};
</script>
<style scoped>
@import "../../assets/css/captcha/index.css";
</style>