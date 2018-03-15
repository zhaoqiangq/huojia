<template>
  <div class="succeedapp">
    <div class="sucapp">
      <div class="return" @click="backHandle"></div>
      发布完成
    </div>
    <img src="../../assets/images/sellicon01.jpg" class="inn" alt="">
    <div class="font">
        <h5>恭喜您，您已发布成功！</h5>
      <p>想要查看申请人名下所有商标?</p>
      <p>想要对自己的商标进行管理？如修改价格、下架处理等。</p>
      <p>想要将商标更好地推广出去？</p>
      <p>那就赶快下载APP吧，更多丰富的功能等着您体验！</p>
    </div>
    <a href="" class="xiazai">下载APP</a>
    <ul class="sellfooter">
      <li><img src="../../assets/images/sellicon04.png" alt="">发布商标</li>
      <li><img src="../../assets/images/sellicon05.png" alt="">我的发布</li>
      <li><img src="../../assets/images/sellicon07.png" alt="">关注我们</li>
    </ul>
  </div>
</template>
<script>
  export default {
    methods:{
    //后退
    backHandle(){
      this.$router.back();
    },
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/sellsb.scss"
</style>
