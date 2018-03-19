<template>
  <div>
    <div class="xqheader">
      <div class="xqreturn" @click="backHandle"></div>
      <span>下载商标货架APP</span>
    </div>
    <a href="javascript:;"  @click="push">
      <img src="../../assets/images/app.jpg" alt="">
    </a>
  </div>
</template>
<script>
  export default{
    methods:{
      //后退
      backHandle(){
        this.$router.back();
      },
      //app数据埋点
      push(){
        this.$buryData('downapp');
      }
    },
  }
</script>
<style lang="scss" scoped>
  .xqheader{
    width: 100%;
    height: 1rem;
    border-bottom: 1px solid #{$borcolor};
    position: relative;
    font-size: .38rem;
    color: #001026;
    text-align: center;
    line-height: 1rem;
  .xqreturn{
    width: .8rem;
    height: 100%;
    background: url(#{$backimg}logicon.png)no-repeat;
    background-size: .48rem .48rem;
    background-position: center left;
    position: absolute;
    left: .25rem;
  }
  }
  a{
    display: block;
    background: #f7f9ff;
    img{
      width: 100%;
    }
  }
</style>
