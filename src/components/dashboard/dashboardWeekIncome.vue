<template>
  <div class="dashboardCard">
    <el-card shadow="never">
      <p class="body3">{{ incomeData.title }}</p>
      <h2 class="header7">$ {{ incomeData.money }}</h2>
      <p class="body3">{{ incomeData.percent }}%</p>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { DashboardData } from "@/Inter/dashboard";
@Options({
  mounted(){
    console.log(new DashboardData().income);
  }
})

export default class dashboardWeek extends Vue {
  incomeData= new DashboardData().income
}
</script>

<style scoped>
</style>