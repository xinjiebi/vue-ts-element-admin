<template>
  <div class="tableListBox">
    <el-card shadow="never">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" width="50" />
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="username" label="Username" width="180" />
        <el-table-column prop="name" label="Username" width="180" />
        <el-table-column prop="address" label="Address" />
      </el-table>
      <el-pagination layout="prev, pager, next" :total="1000" />
    </el-card>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { TableData } from "@/Inter/tableList";

@Options({})
export default class extends Vue {
  tableData = new TableData().data;
}
</script>

