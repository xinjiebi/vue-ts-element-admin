<template>
  <el-card class="weekData" shadow="never">
    <h3 class="subTitle1">Work Data</h3>
    <p class="body3">Historical total return</p>
    <h4 class="H5">{{ workData.income }}</h4>
    <div class="item">
      <p class="body2">Music revenue</p>
      <h6 class="subTitle1">{{ workData.music }}</h6>
    </div>
    <div class="cutline"></div>
    <div class="item">
      <p class="body2">Video revenue</p>
      <h6 class="subTitle1">{{ workData.video }}</h6>
    </div>
    <div class="cutline"></div>
    <div class="item">
      <p class="body2">Advertisement revenue</p>
      <h6 class="subTitle1">{{ workData.ad }}</h6>
    </div>
    <div class="cutline"></div>
    <div class="item">
      <p class="body2">other revenue</p>
      <h6 class="subTitle1">{{ workData.other }}</h6>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { DashboardWorkData } from "@/Inter/dashboard";

@Options({})
export default class extends Vue {
  workData = new DashboardWorkData().workData;
}
</script>