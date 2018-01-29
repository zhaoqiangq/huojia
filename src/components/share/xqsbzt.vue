<template>
    <div>
      <div class="xqheader">
        <div class="xqreturn" @click="backHandle"></div>
        <span>商标状态</span>
      </div>
      <ul class="ztlist">
        <li>
          <span>预计3-5个月</span>
          <p>商标注册申请注册公告）</p>
        </li>
        <li>
          <span>预计3-5个月</span>
          <p>商标注册申请等待驳回复审</p>
        </li>
        <li>
          <span>预计3-5个月</span>
          <p>商标注册申请等待驳回复审</p>
        </li>
        <li class="active">
          <span>2017-11-24</span>
          <p>商标注册申请中</p>
        </li>
        <li class="wg">
          <span>2017-11-24</span>
          <p>商标注册申请注册公告</p>
        </li>
        <li class="wg">
          <span>2017-11-24</span>
          <p>商标注册申请注册公告</p>
        </li>
        <li class="wg">
          <span>2017-11-24</span>
          <p>商标注册申请等待驳回通知发文</p>
        </li>
        <li class="wg">
          <span>2017-11-24</span>
          <p>商标注册申请中</p>
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
