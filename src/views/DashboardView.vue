<template>
  <div>
    <el-row :gutter="20">
      <el-col :md="12" :lg="6">
        <DashboardWeekMusic></DashboardWeekMusic>
      </el-col>
      <el-col :md="12" :lg="6">
        <DashboardWeekVideo></DashboardWeekVideo>
      </el-col>
      <el-col :md="12" :lg="6">
        <DashboardWeekIncome></DashboardWeekIncome>
      </el-col>
      <el-col :md="12" :lg="6">
        <DashboardWeekListen></DashboardWeekListen>
      </el-col>
    </el-row>
    

    <div id="stackedLine" :style="{ width: '100%', height: '360px' }"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { StackedLine } from "@/Inter/dashboard";
import DashboardWeekMusic from "@/components/dashboard/dashboardWeekMusic.vue";
import DashboardWeekVideo from "@/components/dashboard/dashboardWeekVideo.vue";
import DashboardWeekIncome from "@/components/dashboard/dashboardWeekIncome.vue";
import DashboardWeekListen from "@/components/dashboard/dashboardWeekListen.vue";
@Options({
  components: {
    DashboardWeekMusic,
    DashboardWeekVideo,
    DashboardWeekIncome,
    DashboardWeekListen
  },
  mounted() {
    new StackedLine();
    console.log(new StackedLine());
  },
})
export default class extends Vue {}
</script>

<style scoped>
</style>