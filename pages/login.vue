<template>
  <div class="page-login">
    <div class="login-header">
      <a href="/" class="logo" />
    </div> 
    <div class="login-panel">
      <div class="banner">
        <!-- <img
          src="http://img3.imgtn.bdimg.com/it/u=3049430810,885974503&fm=26&gp=0.jpg"
          width="480"
          height="370"
          alt=""
        /> -->
      </div>
      <div class="form">
        <h4 v-if="error" class="tips">
          <i />
          {{ error }}
        </h4>
        <p>
          <span>Account login</span>
        </p>
        <el-input v-model="username" prefix-icon="profile" />
        <el-input v-model="password" prefix-icon="password" type="password" />
        <div class="foot">
          <el-checkbox v-model="checked">Automatic login within 7 days</el-checkbox>
        </div>
        <el-button class="btn-login" type="success" size="mini" @click="login">Login</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";
export default {
  data: () => {
    return {
      checked: "",
      username: "",
      password: "",
      error: ""
    };
  },
  layout: "blank",
  methods: {
    login: function() {
      let self = this;
      self.$axios
        .post("/users/signin", {
          username: self.username, // Code
          password: CryptoJS.MD5(self.password).toString()
        })
        .then(({ status, data }) => {
          if (status === 200) {
            if (data && data.code === 0) {
              location.href = "/";
            } else {
              self.error = data.msg;
            }
          } else {
            self.error = `Server error`;
          }
          setInterval(() => {
            self.error = ``;
          }, 3000);
        });
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/css/login/index.scss";

</style>
