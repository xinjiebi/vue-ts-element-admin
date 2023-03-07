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
            <BBIcon class="iconStyle" :name="item.type"></BBIcon>
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
})
export default class extends Vue {
  interData = new IUniversal().universalData;
  subData = new SubNav().subData;
  selectType = new SubNav().subData[0].type;
  selectMenu(type: string) {
    console.log(type);
    if(type == 'universal'){
      this.interData = new IUniversal().universalData;
        this.selectType = type;
        console.log(this.interData);
    }else if(type == 'music'){
      this.interData = new IUniversal().musicData;
        this.selectType = type;
        console.log(this.interData);
    }
    // switch (type) {
    //   case "universal":
    //     this.interData = new IUniversal().universalData;
    //     this.selectType = type;
    //     console.log(this.interData);
        
    //     break;
    //   case "music":
    //     this.interData = new IUniversal().musicData;
    //     this.selectType = type;
    //     console.log(this.interData);
        
    //     break;
    //   case "social":
    //     this.interData = new IUniversal().socialData;
    //     this.selectType = type;
    //     break;
    //   case "shopping":
    //     this.interData = new IUniversal().shoppingData;
    //     this.selectType = type;
    //     break;
    //   case "food":
    //     this.interData = new IUniversal().foodData;
    //     this.selectType = type;
    //     break;
    //   case "emoji":
    //     this.interData = new IUniversal().emojiData;
    //     this.selectType = type;
    //     break;
    //   case "safety":
    //     this.interData = new IUniversal().safetyData;
    //     this.selectType = type;
    //     break;
    //   case "education":
    //     this.interData = new IUniversal().educationData;
    //     this.selectType = type;
    //     break;
    //   case "weather":
    //     this.interData = new IUniversal().weatherData;
    //     this.selectType = type;
    //     break;
    //   case "sport":
    //     this.interData = new IUniversal().sportData;
    //     this.selectType = type;
    //     break;
    //   case "pet":
    //     this.interData = new IUniversal().petData;
    //     this.selectType = type;
    //     break;
    //   case "msg":
    //     this.interData = new IUniversal().msgData;
    //     this.selectType = type;
    //     break;
    // }
  }
}
</script>
