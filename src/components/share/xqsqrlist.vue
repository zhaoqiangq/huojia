<template>
    <div>
      <div class="xqheader">
        <div class="xqreturn" @click="backHandle"></div>
        <span>申请人信息</span>
      </div>
      <ul class="sqrlist">
        <li>
          <span>申请人名称：</span>
          <p>上海彪马服饰有限公司</p>
        </li>
        <li>
          <span>申请人名称：</span>
          <p>上海彪马服饰有限公司</p>
        </li>
        <li>
          <span>申请人名称：</span>
          <p>上海彪马服饰有限公司</p>
        </li>
        <li>
          <span>申请人名称：</span>
          <p>上海彪马服饰有限公司</p>
        </li>
        <li>
          <span>申请人名称：</span>
          <p>上海彪马服饰有限公司</p>
        </li>
      </ul>

    </div>
</template>
<script>
  export default{
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
