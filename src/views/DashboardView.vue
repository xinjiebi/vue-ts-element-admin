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
      <el-col :md="12" :lg="8">
        <DashboardWork></DashboardWork>
      </el-col>
      <el-col :md="12" :lg="16">
        <StackedLine></StackedLine>
      </el-col>
      <el-col :md="12" :lg="8">
        <Radar></Radar>
      </el-col>
      <el-col :md="12" :lg="8">
        <Category></Category>
      </el-col>
      <el-col :md="12" :lg="8">
        <CategoryArea></CategoryArea>
      </el-col>
      <el-col :md="12" :lg="8">
        <el-card shadow="never">
          <p>test icon</p>
          <!-- <i class="bbIcon bb-more-1" style="font-size:102px;"></i> -->
          <BBIcon name="bb-home-1" color="@mainColor"></BBIcon>
          <BBIcon name="bb-download1" size="32"></BBIcon>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import DashboardWeekMusic from "@/components/dashboard/dashboardWeekMusic.vue";
import DashboardWeekVideo from "@/components/dashboard/dashboardWeekVideo.vue";
import DashboardWeekIncome from "@/components/dashboard/dashboardWeekIncome.vue";
import DashboardWeekListen from "@/components/dashboard/dashboardWeekListen.vue";
import DashboardWork from "@/components/dashboard/dashboardWork.vue";
import StackedLine from "@/components/dashboard/stackedLine.vue";
import Radar from "@/components/dashboard/radar.vue";
import CategoryArea from "@/components/dashboard/categoryArea.vue";
import Category from "@/components/dashboard/category.vue";
import BBIcon from "@/components/iconComponent.vue"

@Options({
  components: {
    DashboardWeekMusic,
    DashboardWeekVideo,
    DashboardWeekIncome,
    DashboardWeekListen,
    DashboardWork,
    StackedLine,
    Radar,
    Category,
    CategoryArea,
    BBIcon
  },
})

export default class extends Vue {}
</script>

<style lang="less" scoped>
// light mode 颜色样式
@import url(@/assets/sytle/lightConfig.less);
// dark mode 颜色样式
// @import url(@/assets/sytle/darkConfig.less);
</style>