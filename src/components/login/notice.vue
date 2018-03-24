<template>
  <div>
    <div class="logheader">
      <span>{{text.title}}</span>
    </div>
    <div class="userfont" v-html="text.content">

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
    created(){
      http.get('/site/get-notice',{
          params:{
             id:this.$route.query.id
          }
        })
        .then((res)=>{
         this.text = res.data.data;
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
