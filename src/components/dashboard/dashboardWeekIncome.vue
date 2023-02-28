<template>
  <div class="dashboardCard">
    <el-card class="dashboardCard" shadow="never">
      <p class="body3">{{ weekData.income.title }}</p>
      <h2 class="header7">$ {{ weekData.income.money }}</h2>
      <p class="body3">{{ weekData.income.percent }}%</p>
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