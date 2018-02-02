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
  import qs from 'qs'
  import http from '../../config/http'
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
        if (this.$checkLPsd(this.LUserPsd) && this.$checkLPsdTo(this.LUserPsdTo,this.LUserPsd)){
          http.post('/site/reset-password',
            qs.stringify({
              token:this.$route.query.token,
              password:this.LUserPsd,
              repassword:this.LUserPsdTo
            }))
            .then((res)=>{
                let redirect = this.$route.query.redirect;
                  if(!redirect){
                     redirect = 'app'
                  }
                   this.$router.push({
                       path: '/'+redirect
                   })
             })
             .catch((error)=>{
                 console.log(error)
                 $('.tishi #tstext').text(error.response.data.message);
                 $('.tishi').show().delay(1000).fadeOut();
              })
        }
      }
    },
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/loging.scss"
</style>
