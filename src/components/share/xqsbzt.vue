<template>
    <div>
      <div class="xqheader">
        <div class="xqreturn" @click="backHandle"></div>
        <span>商标状态</span>
      </div>
      <ul class="ztlist">
        <li class="wg" v-for="item in ztlist">
          <span>{{item.flowDate}}</span>
          <p>{{item.flowName}}</p>
        </li>
      </ul>
    </div>
</template>
<script>
  import http from '../../config/http'
  export default{
    data(){
      return{
        ztlist:''
      }
    },
    methods:{
      //后退
      backHandle(){
        this.$router.back();
      },
    },
    created(){
      let mpid = this.$route.query.zch;
      //默认获取验证码
      http.get('/v1/biz/trademark/'+mpid+'',{
          params:{
            intCls:this.$route.query.sblb
          }
        })
        .then((res)=>{
              this.ztlist=res.data.data.flow;
        })
        .catch((error)=>{
              console.log(error);
         })
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/minpianxq.scss"
</style>
