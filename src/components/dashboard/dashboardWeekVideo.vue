<template>
  <el-card class="weekData" shadow="never">
    <p class="body2">{{ videokData.title }}</p>
    <h2 class="subTitle1">{{ videokData.subTitle }}</h2>
    <p class="body2">{{ videokData.percent }}%</p>
  </el-card>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { DashboardData } from "@/Inter/dashboard";
@Options({})
export default class dashboardWeek extends Vue {
  videokData = new DashboardData().videoData;
}
</script>
