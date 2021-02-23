<template>
  <div class="act-manage">
    <el-table
      :data="tableData.slice((curPage - 1) * pageSize, curPage * pageSize)"
      stripe
      style="width: 100%"
    >
      <el-table-column prop="blogCreateTime" label="日期" min-width="180">
      </el-table-column>
      <el-table-column prop="blogTitle" label="标题" min-width="180">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
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
</template>
<script>
export default {
  data() {
    return {
      tableData: [],
      curPage: 1,
      pageSize: 8,
      total: this.length,
    };
  },
  created() {
    this.$axios.get("/api/getBlog").then((res) => {
      this.tableData = res.data.data;
      this.total = res.data.data.length;
      console.log(this.total);
    });
  },
  methods: {
    handleEdit() {},
    handleDelete() {},
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
@import "../../assets/css/admin/artManage.css";
</style>