<template>
  <div class="dashboardCard">
    <el-card class="dashboardCard" shadow="never">
      <p class="body3">{{ weekData.videoData.title }}</p>
      <h2 class="header7">{{ weekData.videoData.subTitle }}</h2>
      <p class="body3">{{ weekData.videoData.percent }}%</p>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { DashboardData } from "@/Inter/dashboard";
@Options({})
export default class dashboardWeek extends Vue {
  weekData = new DashboardData().weekData;
}
</script>

<style scoped>
</style>