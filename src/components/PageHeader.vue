<template>
  <div class="pageHeader">
    <h2 class="header5">{{ pageHeader }}</h2>
    <div class="enter">
      <el-button circle
        ><el-icon size="20px"><QuestionFilled /></el-icon
      ></el-button>
      <el-button circle
        ><el-icon size="20px"><Notification /></el-icon
      ></el-button>
      <el-button circle
        ><el-icon size="20px"><Setting /></el-icon
      ></el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
    props:{
        pageHeader:String
    }
})
export default class PageHeader extends Vue {
    pageHeader!:string
}
</script>

<style scoped>
</style>