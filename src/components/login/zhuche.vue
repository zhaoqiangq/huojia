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
          <span>密 码：</span>
          <input type="password" name="" v-model="LUserPsd">
        </li>
        <li>
          <span>确认密码：</span>
          <input type="password" name="" v-model="LUserPsdTo">
        </li>
        <li class="yzm">
          <span>图形验证码：</span>
          <input type="text" name="" v-model="picLyanzhengma">
          <img v-bind:src="imgcode" alt="" class="imgyzm" @click="imgcodes">
        </li>
        <li>
          <span>短信验证码：</span>
          <input type="text" name="" v-model="duanxingyz">
           <input type="button" value="获取验证码" v-show="show" @click="getphonecode">
            <div class="daojishi" v-show="!show">{{count}}秒后重新获取</div>

        </li>
      </ul>
        <div class="user_login" @click="Login">注册并登陆</div>
	</div>
</template>

<script>
  import qs from 'qs'
  import http from '../../config/http'

  export default {
    data () {
      return {
        imgcode:'',
        imgdatacode:'',
        uuid:parseInt(10000000*Math.random()),
        show:true,
        count: '',
        timer: null,
        LUserPhone:'',
        picLyanzhengma:'',
        LUserPsd:'',
        LUserPsdTo:'',
        duanxingyz:''
      }
    },
    methods:{
     //验证码倒计时60秒

      //后退
      backHandle(){
        this.$router.back();
      },
      //切换图形验证码
      imgcodes(){
        this.imgcode = this.imgdatacode + '&v=' + parseInt(100000*Math.random());
      },
      getCode(){
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000)
        }
      },
      //获取手机验证码
      getphonecode(){
        if(this.$checkLPhone(this.LUserPhone) && this.$checkLpicma(this.picLyanzhengma) && this.$checkLPsd(this.LUserPsd) && this.$checkLPsdTo(this.LUserPsdTo,this.LUserPsd)){
          http.post('/v1/tool/sms',
              qs.stringify({
                  uuid:this.uuid,
                  validate:this.picLyanzhengma,
                  mobile:this.LUserPhone
                }))
            .then((res)=>{
                this.getCode();
            })
            .catch((error)=>{
              $('.tishi #tstext').text(error.response.data.message);
              $('.tishi').show().delay(1000).fadeOut();
            })
        }
      },


      Login(){
       if(this.$checkLPhone(this.LUserPhone) && this.$checkLpicma(this.picLyanzhengma) && this.$checkLPsd(this.LUserPsd) && this.$checkLPsdTo(this.LUserPsdTo,this.LUserPsd)){
          http.post('/site/register',
            qs.stringify({
              mobile_phone:this.LUserPhone,
              password:this.LUserPsd,
              repassword:this.LUserPsdTo,
              validate:this.duanxingyz
            }))
            .then((res)=>{
             this.$local.save("shanbiao",res.data.data.access_token)
              let redirect = this.$route.query.redirect

              if(!redirect){
                redirect = 'app'
              }

              this.$router.push({
                path: '/'+redirect
              })
              this.$buryData('userreg');
            })
            .catch((error)=>{
              console.log(error)
              $('.tishi #tstext').text(error.response.data.message);
              $('.tishi').show().delay(1000).fadeOut();
            })
        }
      }
    },
    created(){
        //默认获取验证码
        http.get('/v1/tool/captcha/search',{
          params:{
            uuid:this.uuid,
          }
        })
        .then((res)=>{
             this.imgcode = res.data.data.url
            this.imgdatacode = res.data.data.url
        })
        .catch((error)=>{
            console.log(error)
        })
     }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/css/loging.scss"
</style>
