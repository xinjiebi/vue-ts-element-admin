<template>
    <el-card class="weekData" shadow="never">
      <p class="body2">{{ listenData.title }}</p>
      <h2 class="H5">{{ listenData.number }}</h2>
      <p class="body2">{{ listenData.percent }}%</p>
    </el-card>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { DashboardData } from "@/Inter/dashboard";
@Options({})
export default class dashboardWeek extends Vue {
  listenData = new DashboardData().listen;
}
</script>
