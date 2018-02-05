<template>
  <div class="null404">
    <div class="logheader">
      <div class="return" @click="backHandle"></div>
      <span>404</span>
    </div>
  </div>
</template>

<script>
  export default {
      methods: {
        //后退
        backHandle(){
            this.$router.back();
         },
      },
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/loging.scss"


</style>
