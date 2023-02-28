<template>
  <div class="dashboardCard">
    <el-card shadow="never">
      <p class="body3">{{ musicalData.title }}</p>
      <h2 class="header7">
        {{ musicalData.number }} new music works added this week
      </h2>
      <p class="body3">{{ musicalData.percent }}%</p>
    </el-card>
  </div>

</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { DashboardData } from "@/Inter/dashboard";
@Options({})
export default class dashboardWeek extends Vue {
  musicalData = new DashboardData().musical
}
</script>

<style scoped>
</style>