<template>
    <div class="dashboardCard">
       <el-card shadow="never">
           <h3 class="header7">Radar</h3>
           <div id="radar" :style="{ width: '100%', height: '400px' }"></div>
       </el-card>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Radar } from "@/Inter/dashboard";
@Options({
 mounted() {
   new Radar();
 },
})
export default class extends Vue {}
</script>

<style scoped>
</style>