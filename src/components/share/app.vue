<template>
  <div>
    <div class="xqheader">
      <div class="xqreturn" @click="backHandle"></div>
      <span>下载商标货架APP</span>
    </div>
    <a :href="href"  @click="push">
      <img src="../../assets/images/app.jpg" alt="">
    </a>
  </div>
</template>
<script>
  import http from '../../config/http'
  export default{
    data(){
       return{
          href :''
       }
    },
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
    created(){
      http.get('/v1/biz/version/1',{
      })
        .then((res)=>{
          this.href = res.data.data.url;
        })
        .catch((error)=>{
          console.log(error);
        })
    }
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
