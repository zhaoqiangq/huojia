<template>
  <div>
    <div class="headerseach">
      <div class="return" @click="backHandle"></div>
      <input type="text" v-model="val">
      <div class="seek">搜索</div>
    </div>
    <div class="borders"></div>
    <ul class="brand">
      <li>
        <img src="../../assets/images/brand03.png" alt="">
        <span>淘宝</span><p><i>213123</i>件</p>
      </li>
      <li>
        <img src="../../assets/images/brand04.png" alt="">
        <span>天猫</span><p><i>213123</i>件</p>
      </li>
    </ul>
    <div class="borders"></div>
    <ul class="brand">
      <li>
        <img src="../../assets/images/brand05.png" alt="">
        <span>京东</span><p><i>213123</i>件</p>
      </li>
      <li>
        <img src="../../assets/images/brand06.png" alt="">
        <span>苏宁</span><p><i>213123</i>件</p>
      </li>
    </ul>
    <div class="borders"></div>
    <ul class="brand">
      <li>
        <img src="../../assets/images/brand07.png" alt="">
        <span>1688</span><p><i>213123</i>件</p>
      </li>
      <li>
        <img src="../../assets/images/brand08.png" alt="">
        <span>拼多多</span><p><i>213123</i>件</p>
      </li>
    </ul>
    <div class="borders"></div>
    <div class="click" @click="isalert = true">深度了解品牌情况</div>
    <ul class="brfooter">
      <li>
        <a href="">
          <img src="../../assets/images/buyicon03.png" alt="">
          <span>下载APP</span>
        </a>
      </li>
      <li
        v-clipboard:copy="message"
        v-clipboard:success="onCopy"
      >
        <img src="../../assets/images/buyicon04.png" alt="">
        <span>关注微信公众号</span>
      </li>
    </ul>
    <div class="Save" v-show="isalert" >
      <div class="shade"  @click="isalert = false"></div>
      <div class="alert">
        <input type="text" placeholder="请输入手机号">
        <p>
          <span>提示：</span>系统会在1小时后品牌报告以短信的形式发送给您。
        </p>
        <div class="button">
          <span>取消</span>
          <span>确认</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
  export default{
    data(){
      return{
        val:this.$route.query.vals,
        message:'尚标公众号',
        isalert:false
      }
    },
    methods:{
      //后退
      backHandle(){
        this.$router.back();
      },
      onCopy:function (e) {
        $('.tishi #tstext').text('您已复制微信公众号，请前往微信关注');
        $('.tishi').show().delay(1500).fadeOut();
      },
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/industrybrand.scss"
</style>
