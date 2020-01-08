<template>
  <div class="page-register">
    <article class="header">
      <header>
        <a href="/" class="site-logo"></a>
        <span class="login">
          <em>Existing accounts?</em>
          <a href="/login">
            <el-button type="primary" size="small">Sign in</el-button>
          </a>
        </span>
      </header>
    </article>
    <section>
      <el-form
        label-width="100px"
        ref="ruleForm"
        :model="ruleForm"
        :rules="rules"
        class="demo-ruleForm"
      >
        <el-form-item label="Nickname" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="Password" prop="pwd">
          <el-input v-model="ruleForm.pwd" type="password"></el-input>
        </el-form-item>
        <el-form-item label="Confirm password" prop="cpwd">
          <el-input v-model="ruleForm.cpwd" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register">register</el-button>
          <div class="error">{{error}}</div>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>
<script>
import CryptoJS from "crypto-js";
export default {
  layout: "blank",
  data() {
    return {
      statusMsg: "",
      error: "",
      ruleForm: {
        name: "",
        code: "",
        pwd: "",
        cpws: "",
        email: ""
      },

      rules: {
        name: [
          {
            required: true,
            type: "string",
            message: "username",
            trigger: "blur"
          }
        ],
        email: [
          {
            required: true,
            type: "email",
            message: "请输入邮箱",
            trigger: "blur"
          }
        ],
        pwd: [
          {
            required: true,
            message: "password",
            trigger: "blur"
          }
        ],
        cpwd: [
          {
            required: true,
            message: "confirm password",
            trigger: "blur"
          },
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("imput password again"));
              } else if (value !== this.ruleForm.pwd) {
                callback(new Error("两次输入密码不一样"));
              } else {
                callback();
              }
            },
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    sendMsg: function() {
      const self = this;
      let namePass;
      let emailPass;
      if (self.timerid) {
        return false;
      }
      this.$refs["ruleForm"].validateField("name", valid => {
        namePass = valid;
      });
      self.statusMsg = "";
      if (namePass) {
        return false;
      }
      this.$refs["ruleForm"].validateField("email", valid => {
        emailPass = valid;
      });
    },
    register: function() {
      this.$axios.post("/users/verify").then(({ data }) => {
        console.log(data.ko.code);
      });
      let self = this; 
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          let params = {
            username: self.ruleForm.name,
            password: CryptoJS.MD5(self.ruleForm.pwd).toString(),
            email: self.ruleForm.email,
            code: self.ruleForm.code
          };
          console.log("params", params);
          self.$axios.post("/users/signup", params).then(({ status, data }) => {
            if (status === 200) {
              if (data && data.code === 0) {
                location.href = "/login";
              } else {
                self.error = data.msg;
              }
            } else {
              self.error = `Server error, error code:${status}`;
            }
            setTimeout(() => {
              self.error = "";
            }, 1500);
          });
        }
      });
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/register/index.scss";

</style>