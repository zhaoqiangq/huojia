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
  import qs from 'qs'
  import http from '../../config/http'
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
      http.get('/site/reg-agreement')
      .then((res)=>{
            this.text = res.data.data.reg_content;
      })
     .catch((error)=>{
        console.log(error)
     })
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/loging.scss"

</style>
