<template>
     <div class="dashboardCard">
        <el-card shadow="never">
            <h3 class="header7">Stacked Line</h3>
            <div id="stackedLine" :style="{ width: '100%', height: '280px' }"></div>
        </el-card>
     </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { StackedLine } from "@/Inter/dashboard";
@Options({
  mounted() {
    new StackedLine();
    console.log(new StackedLine());
  },
})
export default class extends Vue {}
</script>
