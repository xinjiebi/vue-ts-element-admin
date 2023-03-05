<template>
  <div class="maxCard">
    <el-card shadow="never">
      <el-row :gutter="20">
        <el-col :span="3" v-for="item in uniData" :key="item">
          <BBIcon :name="item.type"></BBIcon>
          <p>{{ item.type }}</p>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { IUniversal } from "@/Inter/icon";
import BBIcon from "@/components/iconComponent.vue";

@Options({
  components: {
    BBIcon,
  },
  mounted() {
    console.log(this.uniData);
  },
})
export default class extends Vue {
  uniData = new IUniversal().uniData;
}
</script>

<style lang="less" scoped>
.maxCard {
  text-align: center;
  .el-card {
    .el-col {
      p {
        font-size: 12px;
        margin: 8px 0 24px 0;
        color: #999;
      }
    }
  }
}
</style>