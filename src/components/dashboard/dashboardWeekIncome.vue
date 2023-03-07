<template>
  <el-card class="weekData" shadow="never">
    <p class="body2">{{ incomeData.title }}</p>
    <h2 class="H5">$ {{ incomeData.money }}</h2>
    <p class="body2">{{ incomeData.percent }}%</p>
  </el-card>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { DashboardData } from "@/Inter/dashboard";
@Options({
  mounted() {
    console.log(new DashboardData().income);
  },
})
export default class dashboardWeek extends Vue {
  incomeData = new DashboardData().income;
}
</script>