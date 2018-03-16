<template>
  <div>
    <ul>
      <li>
        <img src="../../assets/images/logicon01.png" alt="">
         <input type="text" name="" v-model="LUserPhone" placeholder="请输入手机号">
      </li>
      <li class="yzm">
        <img src="../../assets/images/logicon03.png" alt="">
        <input type="password" placeholder="请输入密码"  v-model="LUserPsd">
      </li>
    </ul>
    <div class="user_login" @click="Login">登录</div>
    <div class="font">
      <router-link to="/password" tag="span">忘记密码?</router-link>
       <router-link to="/zhuche" tag="span">立即注册</router-link>
    </div>
    <p>
      *我已阅读并同意 <router-link to="/userxy">《用户服务协议》</router-link>
    </p>
  </div>
</template>
<script>
  import qs from 'qs'
  import http from '../../config/http'
  export default {
    data () {
       return {
        LUserPhone:'',
        LUserPsd:'',
      }
    },
    methods:{
      //登录
      Login(){
        if(this.$checkLPhone(this.LUserPhone) && this.$checkLPsd(this.LUserPsd) ){
          http.post('/site/login',
                qs.stringify({
                   username:this.LUserPhone,
                    password:this.LUserPsd,
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
                 this.$buryData('login');
            })
            .catch((error)=>{
                 $('.tishi #tstext').text(error.response.data.message);
                 $('.tishi').show().delay(1000).fadeOut();
             })
        }
        this.$buryData('login',this.$route.path,'app');
      }

    }
  }
</script>
<style lang="scss" scoped>
  ul{
    padding: 0 0.25rem;
    box-sizing: border-box;
    width: 100%;
  li{
    @include wh(100%,1.1rem);
    line-height: 1.1rem;
    border-bottom: 1px solid #{$borcolor};
    position: relative;
    img{
    width:percentage(42/700);
    height:.42rem;
    vertical-align:middle;
  }
    input[type="text"]{
    width:percentage(600/700);
    height:90%;
    font-size:.26rem;
    padding-left:.3rem;
    box-sizing: border-box;
    color:#{$fontcolor};
      background: #fff;
  }
  input[type="password"]{
    width:percentage(600/700);
    height:90%;
    font-size:.26rem;
    padding-left:.3rem;
    box-sizing: border-box;
    color:#{$fontcolor};
  }
  }
  }
  .user_login{
    background: #406ff4;
    width: 5.9rem;
    height: .88rem;
    border-radius: 1rem;
    text-align: center;
    line-height: .88rem;
    color: #fff;
    font-size: 0.32rem;
    margin: .5rem auto;
  }
  p{
    text-align: center;
    color: #c0c3cc;
    font-size: 0.28rem;
    line-height: 0.5rem;
    margin-top: .6rem;
   a{
      color: #95affa;
    }
  }
  .font{
    width:100%;
    padding:0 0.25rem;
    box-sizing: border-box;
    span{
      font-size: .25rem;
      color:#c0c3cc;
      &:last-child{
          color:#{$actcolor};
           float: right;
       }
    }
  }

</style>
