<template>
  <div class="dashboardCard">
    <el-card class="dashboardCard" shadow="never">
      <p class="body3">{{ weekData.musical.title }}</p>
      <h2 class="header7">
        {{ weekData.musical.number }} new music works added this week
      </h2>
      <p class="body3">{{ weekData.musical.percent }}%</p>
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