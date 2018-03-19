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
          <img v-bind:src="imgcode" alt="" class="imgyzm" @click="imgcodes">
        </li>
        <li>
          <span>短信验证码：</span>
          <input type="text" name="" v-model="duanxingyz">
          <input type="button" value="获取验证码" v-show="show" @click="getphonecode">
          <div class="daojishi" v-show="!show">{{count}}秒后重新获取</div>
        </li>
      </ul>
        <div class="user_login" @click="Login">下一步</div>
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
        LUserPhone:'',
        picLyanzhengma:'',
        show:true,
        count: '',
        timer: null,
        duanxingyz:''
      }
    },
    methods:{
      //验证码倒计时60秒
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
      //切换图形验证码
      imgcodes(){
        this.imgcode = this.imgdatacode + '&v=' + parseInt(100000*Math.random());
      },
      //后退
      backHandle(){
        this.$router.back();
      },
      //获取手机验证码
      getphonecode(){
        if(this.$checkLPhone(this.LUserPhone)==true && this.$checkLpicma(this.picLyanzhengma)){
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
      //登录
      Login(){
        // 验证登陆手机号格式
          if(this.$checkLPhone(this.LUserPhone) && this.$checkLpicma(this.picLyanzhengma)){
            //模拟下一步
            http.post('/site/request-password-reset',
              qs.stringify({
                mobile_phone:this.LUserPhone,
                validate:this.duanxingyz,
              }))
              .then((res)=>{
                this.$router.push({path: '/newpassword',query: {token: res.data.data.token}})
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
