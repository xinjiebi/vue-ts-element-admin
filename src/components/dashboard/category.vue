<template>
    <div class="dashboardCard">
       <el-card shadow="never">
           <h3 class="header7">Category</h3>
           <div id="category" :style="{ width: '100%', height: '400px' }"></div>
       </el-card>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Category } from "@/Inter/dashboard";
@Options({
 mounted() {
   new Category();
 },
})
export default class extends Vue {}
</script>

<style scoped>
</style>