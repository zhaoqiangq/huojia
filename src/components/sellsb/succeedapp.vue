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
    <a :href="href" class="xiazai">下载APP</a>
    <ul class="sellfooter">
      <router-link tag="li"  :to="{path:'/sellform'}">
        <img src="../../assets/images/sellicon03.png" alt="">发布商标
      </router-link>
      <router-link tag="li"  :to="{path:'/iissue'}">
        <img src="../../assets/images/sellicon05.png" alt="">我的发布
      </router-link>
      <li @click="ishref = !ishref"><img src="../../assets/images/sellicon07.png" alt="">关注我们</li>
    </ul>
    <ul class="footlist" v-if="ishref">
      <li   v-clipboard:copy="message"
            v-clipboard:success="onCopy">微信公众号</li>
      <li><a :href="href">下载APP</a></li>
    </ul>
  </div>
</template>
<script>
  import http from '../../config/http'
  export default {
      data(){
        return{
          message:this.$wx(),    //微信公众号
          href:'',
          ishref:false
        }
      },
    methods:{
    //后退
    backHandle(){
      this.$router.back();
    },
      //关注公众号
      onCopy:function (e) {
        $('.tishi #tstext').text('您已复制微信公众号，请前往微信关注');
        $('.tishi').show().delay(1500).fadeOut();
      },
    },
    created(){
      http.get('/v1/biz/version/1',{
      })
        .then((res)=>{
          this.href = res.data.data.url;
        })
        .catch((error)=>{
          console.log(error);
        })
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/sellsb.scss"
</style>
