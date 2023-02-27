<template>
  <div>
    <p @click="signIn">我是登录页面</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { SignInRule } from "@/Inter/LoginInter";
@Options({})
export default class Login extends Vue {
  signFrom = new SignInRule;

  signIn() {
    console.log(this.signFrom.rulesData);


  }
}
</script>

<style scoped>
</style>