<template>
  <div class="signInBox">
    <div class="signInForm">
      <img src="@/assets/logo.png" alt="" />
      <h3 class="header3">Welcome Back:)</h3>
      <el-form
        :model="signForm"
        status-icon
        :rules="rules"
        label-width="120px"
        label-position="top"
        class="demo-signForm"
      >
        <el-form-item label="Username" prop="username">
          <el-input v-model="signForm.username" autocomplete="off" />
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

<style lang="less" scoped>
.signInBox {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  .signInForm {
    width: 30%;
    padding: 15% 80px;
    img {
      width: 92px;
      height: 92px;
    }
    .el-form {
      margin-top: 40px;
    }
    .el-button {
      width: 120px;
      margin-top: 20px;
    }
  }
  .signInImg {
    width: 70%;
    height: 100vh;
    
    .el-image {
      width: 100%;
      height: 100%;
      border-radius: 20px 0 0 20px;
    }
  }
}
</style>