<template>
  <div class="tableListBox">
    <el-card shadow="never">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" width="50" />
        <el-table-column label="Image" width="100">
          <template #default="scope">
            <el-image
              style="width: 32xp; height: 32px; border-radius: 4px"
              :src="scope.row.image"
            ></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="username" label="Username" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="createTime" label="CreateTime" />
        <el-table-column prop="address" label="Address" />
        <el-table-column label="Operate" width="180">
          <template #default="scope">
            <el-button
              link
              type="primary"
              size="small"
              @click="toDetails(scope.$index)"
              >Detail</el-button
            >
            <el-button
              link
              type="primary"
              size="small"
              @click="toEdit(scope.$index)"
              >Edit</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination layout="prev, pager, next" :total="1000" />
    </el-card>
  </div>
</template>
  
  <script lang="ts">
import { Options, Vue } from "vue-class-component";
import { TableData } from "@/Inter/operateList";

@Options({})
export default class extends Vue {
  tableData = new TableData().data;
  toDetails(index: number) {
    console.log(index);
  }
  toEdit(index: number) {
    console.log(index);
  }
}
</script>
  
  <style lang="less" scoped>
.el-card {
  height: calc(100vh - 120px);
  overflow: auto;
  .el-table {
    height: calc(100vh - 200px);
  }
  .el-pagination {
    position: fixed;
    right: 40px;
    margin-top: 12px;
  }
}
</style>