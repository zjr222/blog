<template>
  <div class="act-manage">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" min-width="180">
      </el-table-column>
      <el-table-column prop="art" label="评论文章" min-width="180">
      </el-table-column>
      <el-table-column prop="content" label="评论内容"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >回复</el-button
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
      :total="1000"
      class="pageChange"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
      curPage: 1,
      pageSize:8,
      total:50
    };
  },
  methods: {
    handleEdit() {},
    handleDelete() {},
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style scoped>
@import "../../assets/css/admin/comManage.css";
</style>