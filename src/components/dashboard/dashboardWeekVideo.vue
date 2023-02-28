<template>
  <div class="dashboardCard">
    <el-card shadow="never">
      <p class="body3">{{ videokData.title }}</p>
      <h2 class="header7">{{ videokData.subTitle }}</h2>
      <p class="body3">{{ videokData.percent }}%</p>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { DashboardData } from "@/Inter/dashboard";
@Options({})
export default class dashboardWeek extends Vue {
  videokData = new DashboardData().videoData
}
</script>

<style scoped>
</style>