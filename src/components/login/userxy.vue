<template>
  <div>
    <div class="logheader">
      <div class="return" @click="backHandle"></div>
      <span>用户服务协议</span>
    </div>
    <div class="userfont" v-html="text">
    </div>
  </div>

</template>

<script>

  export default {
    data(){
        return{
            text:'' 
        }
    },
    methods: {
      //后退
      backHandle(){
        this.$router.back();
      },
    },
    created(){
    
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/loging.scss"

</style>
