<template>
  <div class="iconBox">
    <el-row :gutter="20">
      <el-col :sm="4" :md="4" :lg="3">
        <div class="subNav" v-for="item in subData" :key="item.type">
          <p
            class="body1"
            :class="{ active: item.type == selectType }"
            @click="selectMenu(item.type)"
          >
            {{ item.title }}
          </p>
        </div>
      </el-col>
      <el-col :sm="20" :md="20" :lg="21">
        <el-row :gutter="20">
          <el-col
            class="iconStyle"
            :span="3"
            v-for="item in interData"
            :key="item"
          >
            <BBIcon :name="item.type"></BBIcon>
            <p class="iconText">{{ item.type }}</p>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { IUniversal, SubNav } from "@/Inter/icon";
import BBIcon from "@/components/iconComponent.vue";

@Options({
  components: {
    BBIcon,
  },
  mounted(){
    const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.id = 'iconfontStyle'
        link.type = 'text/css'
        link.href = require('@/assets/iconfont/iconUniversal/iconfont.css')
        document.getElementsByTagName("head")[0].appendChild(link);
  }
})
export default class extends Vue {
  interData = new IUniversal().universalData;
  subData = new SubNav().subData;
  selectType = new SubNav().subData[0].type;
  selectMenu(type: string) {
    this.selectType = type;
    this.interData = new IUniversal().changeData(type)!;
  }
}
</script>

