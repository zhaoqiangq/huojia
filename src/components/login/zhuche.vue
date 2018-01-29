<template>
	<div class="backs">
	  <div class="logheader">
        <div class="return" @click="backHandle"></div>
        <span>注册账号</span>
      </div>
        <ul>
        <li>
          <span>手机号：</span>
          <input type="text" name="" v-model="LUserPhone" >
        </li>
        <li>
          <span>密码：</span>
          <input type="password" name="" v-model="LUserPsd">
        </li>
        <li>
          <span>确认密码：</span>
          <input type="password" name="" v-model="LUserPsdTo">
        </li>
        <li class="yzm">
          <span>图形验证码：</span>
          <input type="text" name="" v-model="picLyanzhengma">
          <img src="../../assets/images/yzmicon.png" alt="" class="imgyzm">
        </li>
        <li>
          <span>短信验证码：</span>
          <input type="text" name="">
           <input type="button" value="获取验证码">
        </li>
      </ul>
        <div class="user_login" @click="Login">注册并登陆</div>
	</div>
</template>

<script>
  var code ;//在全局定义验证码
  export default {
    data () {
      return {
        LUserPhone:'',
        picLyanzhengma:'',
        LUserPsd:'',
        LUserPsdTo:'',
      }
    },
    methods:{
      //后退
      backHandle(){
        this.$router.back();
      },
      Login(){
        //验证登陆密码格式
        this.$checkLPsdTo(this.LUserPsdTo,this.LUserPsd);
        this.$checkLPsd(this.LUserPsd);
        // 验证登陆手机号格式
          this.$checkLPhone(this.LUserPhone);
      }

    },
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/loging.scss"
</style>
