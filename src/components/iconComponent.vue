<template>
  <i class="bbIcon" :class="name" :style="iconStyle"></i>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    name: String,
    size: Number,
    color: String,
  },
  mounted() {
    if(this.size == undefined){
        this.iconStyle = `font-size:28px;color:${this.color}`;
    }else{
        this.iconStyle = `font-size:${this.size}px;color:${this.color}`;
    }

    console.log(this.iconStyle);
    
  },
})
export default class extends Vue {
  name!: string;
  size!: string;
  color!: string;
  iconStyle = "";
}
</script>