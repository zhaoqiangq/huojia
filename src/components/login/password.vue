<template>
  <div class="backs">
      <div class="logheader">
        <div class="return" @click="backHandle"></div>
        <span>找回密码</span>
      </div>
      <ul>
        <li>
          <span>手机号：</span>
          <input type="text" name="" v-model="LUserPhone">
        </li>
        <li class="yzm">
          <span>图形验证码：</span>
          <input type="text" name=""  v-model="picLyanzhengma">
          <img src="../../assets/images/yzmicon.png" alt="" class="imgyzm">
        </li>
        <li>
          <span>短信验证码：</span>
          <input type="text" name="">
           <input type="button" value="获取验证码">
        </li>
      </ul>
        <div class="user_login" @click="Login">下一步</div>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        LUserPhone:'',
        picLyanzhengma:''
      }
    },
    methods:{
      //后退
      backHandle(){
        this.$router.back();
      },
      Login(){
        // 验证登陆手机号格式
          this.$checkLPhone(this.LUserPhone);
          if(this.$checkLPhone(this.LUserPhone)==true){
            //模拟下一步
            this.$router.push('/newpassword');
          }
      }

    },
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/loging.scss"
</style>
