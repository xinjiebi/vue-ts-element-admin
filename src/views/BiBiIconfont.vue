<template>
  <div class="iconBox">
    <el-row :gutter="20">
      <el-col :md="4" :lg="2">
        <div class="subNav" v-for="item in subData" :key="item.type">
          <div class="body1" :class="{ active: item.type == selectTyoe }">
            {{ item.title }}
          </div>
        </div>
      </el-col>
      <el-col :md="18" :lg="20">
        <div class="subContent">
          <el-card shadow="never">
            <el-row :gutter="20">
              <el-col :span="3" v-for="item in uniData" :key="item">
                <BBIcon :name="item.type"></BBIcon>
                <p>{{ item.type }}</p>
              </el-col>
            </el-row>
          </el-card>
        </div>
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
  uniData = new IUniversal().uniData;
  subData = new SubNav().subData;
  selectTyoe = new SubNav().subData[0].type;
}
</script>
