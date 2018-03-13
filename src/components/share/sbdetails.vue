<template>
  <div>
      <div class="xqheader">
          <div class="xqreturn" @click="backHandle"></div>
          <span>商标详情</span>
        <router-link tag="div" class="recommend" v-if="isshow" :to='{path:"/recommend",query:{sblb:details.tm_bigtype}}'>
          智能推荐
        </router-link>
      </div>
      <div class="xzimg">
        <img v-bind:src="details.tm_img" alt="">
        <span>{{details.tm_name}}</span>
      </div>
      <ul class="xqlist">
        <li>
          <span>类别：</span>
          {{details.tm_bigtype_name}}
        </li>
        <router-link tag="li" class="sbzt" :to='{path:"/xqsbzt",query:{sblb:intCls,zch:zch}}'>
          <span>当前状态：</span>
          {{details.current_status}}
        </router-link>
        <li>
          <span>注册号：</span>
          {{details.reg_num}}
        </li>
        <li>
          <span>申请时间：</span>
          {{details.apply_time}}
        </li>
        <li>
          <span>申请人：</span>
         {{details.apply_name}}
        </li>
        <li>
          <span>使用期限：</span>
          {{details.use_period}}
        </li>
      </ul>
      <ul class="lxqlist " v-bind:class="{active:isshow}">
        <router-link tag="li" class="link" :to='{path:"/xqfwlist",query:{sblb:intCls,zch:zch}}'>
          <span>商标服务列表</span>
        </router-link>
        <router-link tag="li" class="link" :to='{path:"/xqsqrlist",query:{sblb:intCls,zch:zch}}'>
          <span>申请人信息</span>
        </router-link>
        <li><span>代理公司</span><span class="right">{{details.agent}}</span></li>
      </ul>
      <div class="xqbun" v-if="isshow">
        <a href="">在线咨询</a>
        <a href="">立即购买</a>
      </div>
  </div>
</template>
<script>
  import http from '../../config/http'
  export default {
    name: 'sbdetails',
    data () {
      return {
        details:'',
        zch:this.$route.query.zch,
        intCls:this.$route.query.sblb,
        isshow:this.$route.query.isshow,
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
      let sblb = this.$route.query.sblb
      //默认获取验证码
      http.get('/v1/biz/trademark/'+mpid+'',{
          params:{
            intCls:this.$route.query.sblb
          }
        })
        .then((res)=>{
             this.details=res.data.data;
             console.log(res);
        })
        .catch((error)=>{
              console.log(error);
        })

      var detail = '商标详情注册号'+mpid+'商标类别'+sblb;
      this.$buryData('tmview',detail,'');

    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/minpianxq.scss"
</style>
