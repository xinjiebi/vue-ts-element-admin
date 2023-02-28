<template>
  <div class="dashboardCard">
    <el-card shadow="never">
      <p class="body3">{{ listenData.title }}</p>
      <h2 class="header7">{{ listenData.number }}</h2>
      <p class="body3">{{ listenData.percent }}%</p>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { DashboardData } from "@/Inter/dashboard";
@Options({})
export default class dashboardWeek extends Vue {
  listenData = new DashboardData().listen;
}
</script>

<style scoped>
</style>