<template>
  <div class="login">
    <div class="top">
      <p class="img logo"><el-image :src="require('@/assets/img/login/logo.png')"/></p>
      <div>
        <p class="img ewm">
          <el-image :src="require('../../assets/img/login/ewm_qr.png')"/>
        </p>
        <span>下载客户端</span>
      </div>
    </div>
    <div class="content">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm">
        <div class="title">系统用户登录</div>
        <el-form-item prop="name">
          <p class="img icon"><el-image :src="require('../../assets/img/login/user_icon.png')"/></p>
          <el-input type="text" ref="name" v-model="ruleForm.name" placeholder="请输入用户名" autocomplete="off" @keyup.enter.native="focusKey('name')"></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <p class="img icon"><el-image :src="require('../../assets/img/login/passwrod_icon.png')"/></p>
          <el-input type="password" ref="pass" v-model="ruleForm.pass" placeholder="请输入用密码" autocomplete="off" @keyup.enter.native="focusKey('pass')"></el-input>
        </el-form-item>
        <div class="checkbox">
          <el-checkbox v-model="checked">记住密码</el-checkbox>
        </div>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form>
    </div>
    <div class="bottom">
      <div class="container">
        版权所有：湖南省交通水利建设集团有限公司
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      var validateName = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入账号!'));
        }else {
          callback()
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码!'));
        }else {
          callback()
        }
      };
      return {
        ruleForm: {
          name: '',
          pass: '',
        },
        rules: {
          name: [
            { validator: validateName, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
        },
        visible: false
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      focusKey(key) {
        if(key === 'name') {
          this.$refs.pass.focus()
        }else if(key === 'pass') {
          this.submitForm('ruleForm')
        }
      }
    }
  }
</script>

<style lang="less" scoped>
/deep/ .el-popover {
  min-width: unset !important;
}
.login {
  height: 100vh;
  .top {
    width: calc(549px + 579px + 47px);
    height: 128px;
    font-size: var(--the-body-font-size);
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .img.logo {
      width: 549px;
    }
    .img.ewm {
      width: 36px;
      margin: 0 auto 11px;
    }
  }
  .content {
    background: url('../../assets/img/login/login_bg.png') center center / 100% 100% no-repeat;
    height: calc(100% - 128px - 128px);
    position: relative;
    /deep/ .el-form {
      width: 380px;
      height: 448px;
      background: var(--white-color);
      position: absolute;
      right: 370px;
      top: 50%;
      transform: translateY(-50%);
      .title {
        text-align: center;
        color: var(--blue-color);
        font-size: 16px;
        font-weight: bold;
        line-height: 56px;
        border-bottom: 2px solid #F0F3F5;
      }
      .el-form-item {
        width: 300px;
        margin: 24px auto 0 auto;
        .el-form-item__content {
          display: flex;
          align-items: center;
          border: 1px solid #dee1e3;
          .img.icon {
            display: flex;
            align-items: center;
            margin: 0 10px;
            .el-image {
              width: 18px;
            }
          }
          .el-input__inner {
            border: unset;
            height: 44px;
            line-height: 44px;
            padding: 0 38px 0 0;
          }
        }
      }
      /deep/ .el-form-item:first-child {
        margin: 0 auto;
      }
      .checkbox {
        width: 300px;
        margin: 16px auto 48px;
        display: flex;
        justify-content: flex-end;
        .el-checkbox {
          color: #003A7C;
          font-size: 12px;
          display: flex;
          align-items: center;
          .el-checkbox__inner {
            width: 16px;
            height: 16px;
          }
          .el-checkbox__inner::after {
            height: 9px;
            left: 5px;
          }
        }
      }
      .el-button {
        display: block;
        width: 300px;
        height: 44px;
        margin: 0 auto;
        background: #EF7230;
        border: unset;
        border-radius: unset;
      }
    }
  }
  .bottom {
    height: 128px;
    background: #003A7C;
    .container {
      font-size: var(--the-body-font-size);
      color: var(--white-color);
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>