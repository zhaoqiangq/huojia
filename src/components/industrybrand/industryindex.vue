<template>
  <div class="brindex">
    <div class="brheader active">
      <ul class="brnav">
        <router-link tag="li"  :to="{path:'/brindex'}">
          品牌维权
         </router-link>
        <router-link tag="li" class="active" :to="{path:'/industryindex'}">
          行业情报
        </router-link>
      </ul>
      <div class="search">
        <div class="position">
          <input type="text" v-model="val" placeholder="请输入商品名称">
          <div class="button" @click="path">搜索</div>
        </div>
      </div>
    </div>
    <div class="desktop" v-if="issafari"  @click="safarshows = true">
      <img src="../../assets/images/zcicon03.png" alt="">
      <span>点击此处保存到桌面</span>
    </div>
    <div class="safaris" v-show="safarshows">
      <div class="shade" @click="safarshows  = false"></div>
      <div class="imgs"></div>
    </div>
  </div>
</template>
<script >
  export default{
    data(){
      return{
        val:'',
        issafari:false,
        safarshows:false
      }
    },
    methods:{
      path:function () {
        if(this.val==''){
          $('.tishi #tstext').text('请输入商标名称');
          $('.tishi').show().delay(1000).fadeOut();
        }else {
          this.$router.push({path: '/indseach',query: {vals: this.val}});
        }
      }
    },
    created(){
      if(this.$safari()){
        this.issafari = true;
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/industrybrand.scss"
</style>
