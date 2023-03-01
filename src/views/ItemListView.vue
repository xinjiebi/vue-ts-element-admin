<template>
  <div class="maxCard">
    <el-card shadow="never">
      <div class="item" v-for="item in itemList" :key="item.title">
        <img :src="item.image" alt="">
        <div class="itemText">
           <h5 class="header5">{{item.title}}</h5>
           <p class="body3">
            <span>Play: {{item.display.play}}</span>
            <span>Comment: {{item.display.comment}}</span>
            <span>Liked: {{item.display.liked}}</span>
            <span>Income: {{item.display.newIncome}}</span>
           </p>
           <div class="itemButton">
            <span class="body1">Edit</span>
            <span class="body1">Details</span>
            <span class="body1">Income</span>
           </div>
        </div>

      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {ItemData } from "@/Inter/itemList"

@Options({})
export default class extends Vue {
    itemList = new ItemData().newItem
}
</script>

