<template>
  <div>
     <div class="reindex">
        <h1>查询商标</h1>
        <div class="search">
          <div class="position">
            <input type="text" v-model="val" placeholder="请输入商标名称">
            <div class="button" @click="path">查询能否注册</div>
          </div>
        </div>
     </div>
    <div class="desktop">
      <img src="../../assets/images/zcicon03.png" alt="">
      <span>点击此处保存到桌面</span>
    </div>
  </div>
</template>
<script >
  export default{
      data(){
        return{
          val:''
        }
      },
    methods:{
      path:function () {
          if(this.val==''){
            $('.tishi #tstext').text('请输入商标名称');
            $('.tishi').show().delay(1000).fadeOut();
          }else {
            this.$router.push({path: '/relist',query: {vals: this.val}});
          }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/register.scss"
</style>
