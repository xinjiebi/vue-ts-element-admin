<template>
  <div class="signInBox">
    <div class="signInForm">
      <img src="@/assets/logo.png" alt="" />
      <h3 class="H4">Welcome Back:)</h3>
      <el-form
        :model="signForm"
        status-icon
        :rules="rules"
        label-width="120px"
        label-position="top"
        class="demo-signForm"
      >
        <el-form-item label="Username" prop="username">
          <el-input v-model="signForm.username" autocomplete="off" placeholder="" />
        </el-form-item>
        <el-form-item label="Password" prop="password">
          <el-input
            v-model="signForm.password"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item>
          <el-button size="large" round @click="signIn">Sign In</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="signInImg">
      <el-image fit="cover" :src="loginImg"></el-image>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { SignInData, SignInRule, SignIn } from "@/Inter/Login";
@Options({})
export default class Login extends Vue {
  loginImg = require("@/assets/signImg.jpg");
  signForm = new SignInData();
  rules = new SignInRule().rulesData;
  signIn() {
    const sign = new SignIn(this.signForm.username, this.signForm.password);
    if(sign.toSign()){
        this.$router.push('/')
    }

  }
}
</script>
