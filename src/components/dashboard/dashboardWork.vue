<template>
  <div class="dashboardCard">
    <el-card shadow="never">
      <h3 class="header7">Work Data</h3>
      <p class="body5">Historical total return</p>
      <h4 class="header4">{{ workData.income }}</h4>
      <div class="item">
        <p class="body3">Music revenue</p>
        <h6 class="header7">{{ workData.music }}</h6>
      </div>
      <div class="cutlineHeavy"></div>
      <div class="item">
        <p class="body3">Video revenue</p>
        <h6 class="header7">{{ workData.video }}</h6>
      </div>
      <div class="cutlineHeavy"></div>
      <div class="item">
        <p class="body3">Advertisement revenue</p>
        <h6 class="header7">{{ workData.ad }}</h6>
      </div>
      <div class="cutlineHeavy"></div>
      <div class="item">
        <p class="body3">other revenue</p>
        <h6 class="header7">{{ workData.other }}</h6>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { DashboardWorkData } from "@/Inter/dashboard";

@Options({})
export default class extends Vue {
  workData = new DashboardWorkData().workData;
}
</script>

<style scoped>
</style>