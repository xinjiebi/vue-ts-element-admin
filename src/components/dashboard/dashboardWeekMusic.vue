<template>
  <el-card class="weekData" shadow="never">
    <p class="body2">{{ musicalData.title }}</p>
    <h2 class="subTitle1">
      {{ musicalData.number }} new music works added this week
    </h2>
    <p class="body2">{{ musicalData.percent }}%</p>
  </el-card>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { DashboardData } from "@/Inter/dashboard";
@Options({})
export default class dashboardWeek extends Vue {
  musicalData = new DashboardData().musical;
}
</script>
