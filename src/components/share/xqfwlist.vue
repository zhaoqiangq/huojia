<template>
    <div>
      <div class="xqheader">
        <div class="xqreturn" @click="backHandle"></div>
        <span>商标服务列表</span>
      </div>
      <ul class="xqfwlb">
        <li>0101 工业气体,单质</li>
        <li>0101 工业气体,单质</li>
        <li>0101 工业气体,单质</li>
        <li>0101 工业气体,单质</li>
        <li>0101 工业气体,单质</li>
        <li>0101 工业气体,单质</li>
        <li>0101 工业气体,单质</li>
        <li>0101 工业气体,单质</li>
        <li>0101 工业气体,单质</li>
        <li>0101 工业气体,单质</li>
        <li>0101 工业气体,单质</li>
        <li>0101 工业气体,单质</li>
        <li>0101 工业气体,单质</li>
        <li>0101 工业气体,单质</li>
        <li>0101 工业气体,单质</li>
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
