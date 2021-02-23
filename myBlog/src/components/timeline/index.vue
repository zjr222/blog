<template>
  <div class="block">
    <div class="timeline">
      <el-timeline class="timeline-1">
        <el-timeline-item
          v-for="item in data.slice(
            (curPage - 1) * pageSize,
            curPage * pageSize
          )"
          :key="item"
          :timestamp="item.blogCreateTime"
          placement="top"
        >
          <el-card class="color">
            <h4>{{ item.blogTag }}</h4>
            <p>{{ `提交于${item.blogCreateTime}` }}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurChange"
        :current-page.sync="curPage"
        :page-size="pageSize"
        layout="prev, pager, next, jumper"
        :total="total"
        class="pageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [],
      curPage: 1,
      pageSize: 4,
      total: this.length,
    };
  },
  created() {
    this.$axios.get("/api/getBlog").then((res) => {
      this.data = res.data.data;
      this.total = res.data.data.length;
    });
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurChange(val) {
      this.curPage = val;
      console.log(`当前页: ${val}`);
    },
  },
};
</script>

<style scoped>
@import "../../assets/css/timeline/index.css";
</style>