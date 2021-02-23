<template>
  <div class="main">
    <div
      class="personalization"
      :style="{
        overflow: overflowSty,
        height: heightSty,
      }"
    >
      <div class="everyday">
        <div class="time">
          <span class="day">{{ day }}</span>
          <span class="month">{{ `${month}`+'.' }}</span>
          <span class="year">{{ year }}</span>
        </div>
        <div class="english">
          <span>{{ english }}</span>
        </div>
        <div class="chinese">
          <span>{{chinese}}</span>
        </div>
        <div class="author">
          <span>{{'----'+`${author}`}}</span>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "@/components/footer/index.vue";
export default {
  data() {
    return {
      overflowSty: "hidden",
      heightSty: "650px",
      day: "",
      month: "",
      chinese: "",
      english: "",
      year: "",
      author:'',
    };
  },
  components: {
    Footer,
  },
  created() {
    this.$axios.get("/api/everyday").then((res) => {
      this.day = res.data.data.day;
      this.month = res.data.data.month;
      this.chinese = res.data.data.chinese;
      this.english = res.data.data.english;
      this.year = res.data.data.year;
      this.author = res.data.data.author;
    });
  },
  methods: {},
};
</script>
<style scoped>
@import "../../assets/css/main/index.css";
</style>