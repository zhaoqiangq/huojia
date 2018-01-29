<template>
	<div class="backs">
	  <div class="logheader">
        <div class="return" @click="backHandle"></div>
        <span>重新输入密码</span>
      </div>

      <ul>
        <li>
          <span>新密码：</span>
          <input type="password" name="" v-model="LUserPsd">
        </li>
        <li>
          <span>确认密码：</span>
          <input type="password" name="" v-model="LUserPsdTo">
        </li>
      </ul>
      <div class="user_login" @click="Login">保存并登陆</div>
	</div>
</template>

<script>
export default{
	data(){
		return {
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
      }
    },
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/loging.scss"
</style>
