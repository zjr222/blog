<template>
  <div class="container">
    <Header />
    <main>
      <router-view></router-view>
    </main>    
  </div>
</template>
<script>
import Header from "../components/header/index";
export default {
  data() {
    return {
    };
  },
  components: {
    Header,
  },
  methods: {},
};
</script>
<style scoped>
</style>
