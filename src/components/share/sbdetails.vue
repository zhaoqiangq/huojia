<template>
  <div>
      <div class="xqheader">
          <div class="xqreturn" @click="backHandle"></div>
          <span>商标详情</span>
      </div>
      <div class="xzimg">
        <img src="../../assets/images/img.jpg" alt="">
        <span>Kederme 科德美</span>
      </div>
      <ul class="xqlist">
        <li>
          <span>类别：</span>
          25类-服装鞋帽
        </li>
        <router-link to="/xqsbzt" tag="li" class="sbzt">
          <span>当前状态：</span>
          商标注册申请注册公告
        </router-link>
        <li>
          <span>注册号：</span>
          123456789
        </li>
        <li>
          <span>申请时间：</span>
          2014-04-11
        </li>
        <li>
          <span>申请人：</span>
         河北洁仕宝日用塑料制品有限公司
        </li>
        <li>
          <span>使用期限：</span>
          2015-09-07至2025-09-06
        </li>
      </ul>
      <ul class="lxqlist">
        <router-link to="/xqfwlist" tag="li" class="link"><span>商标服务列表</span></router-link>
        <router-link to="/xqsqrlist" tag="li" class="link"><span>申请人信息</span></router-link>
        <li><span>代理公司</span><span class="right">上海尚标互联网科技有限公司</span></li>
      </ul>
  </div>
</template>
<script>
  export default {
    name: 'sbdetails',
    data () {
      return {

      }
    },
    methods:{
      //后退
      backHandle(){
        this.$router.back();
      },
    },
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/minpianxq.scss"
</style>
