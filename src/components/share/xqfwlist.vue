<template>
    <div>
      <div class="xqheader">
        <div class="xqreturn" @click="backHandle"></div>
        <span>商标服务列表</span>
      </div>
      <ul class="xqfwlb">
        <li v-for="item in fwlist">{{item.goodsName}}</li>

      </ul>
    </div>
</template>
<script>
  import http from '../../config/http'
  export default{
    data(){
      return{
        fwlist:''
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
              this.fwlist = res.data.data.tm_type
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
