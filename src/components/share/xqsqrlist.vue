<template>
    <div>
      <div class="xqheader">
        <div class="xqreturn" @click="backHandle"></div>
        <span>申请人信息</span>
      </div>
      <ul class="sqrlist">
        <li>
          <span>申请人名称：</span>
          <p>{{sqrname.apply_name}}</p>
        </li>
        <li>
          <span>申请人中文地址：</span>
          <p>{{sqrname.address_cn}}</p>
        </li>
        <li>
          <span>申请人英文名	：</span>
          <p>{{sqrname.apply_name_en	}}</p>
        </li>
        <li>
          <span>申请人英文地址	：</span>
          <p>{{sqrname.address_en}}</p>
        </li>
      </ul>

    </div>
</template>
<script>
  import http from '../../config/http'
  export default{
    data(){
      return{
        sqrname:''
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
        this.sqrname = res.data.data;
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
