<template>
    <div class="dashboardCard">
       <el-card shadow="never">
           <h3 class="header7">Category Area</h3>
           <div id="categoryArea" :style="{ width: '100%', height: '400px' }"></div>
       </el-card>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { CategoryArea } from "@/Inter/dashboard";
@Options({
 mounted() {
   new CategoryArea();
 },
})
export default class extends Vue {}
</script>

<style scoped>
</style>