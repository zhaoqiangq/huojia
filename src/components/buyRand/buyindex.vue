<template>
  <div>
    <div class="buysearch">
      <h6>查询商标</h6>
      <div class="search-box">
        <div class="selete" @click="isActive = !isActive">
          {{secrchval}}
          <ul v-show="isActive">
            <li @click="secrchval='按行业产品'">按行业产品</li>
            <li @click="secrchval='按商标名称'">按商标名称</li>
          </ul>
        </div>
        <input type="text" placeholder="请输入搜索内容" v-model="val">
        <span @click="path">搜索</span>
      </div>
    </div>
    <div class="hot">
        <span>热门搜索</span>
      <ul>
        <router-link tag="li" v-for="item,index in hotlist" :key="index" :to="{path:'/buylist',query:{vals:item,type:'按行业产品'}}">
          {{item}}
        </router-link>
      </ul>
    </div>
  </div>

</template>
<script>
  import http from '../../config/http'
  export default {
      data(){
          return{
              isActive:false,
              secrchval:'按行业产品',
              hotlist:'',
              val:''
          }
      },
      methods:{
        path:function () {
          if(this.val==''){
            $('.tishi #tstext').text('请输入搜索内容');
            $('.tishi').show().delay(1000).fadeOut();
          }else {
             this.$router.push({path: '/buylist',query: {vals: this.val,type:this.secrchval}});
          }
        }
      },
      created(){
        http.get('/v1/market/shelf/hot')
          .then((res)=>{
            this.hotlist = res.data.data;
          })
          .catch((error)=>{
            console.log(error);
          })
      }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/register.scss"
</style>
