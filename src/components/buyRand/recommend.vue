<template>
  <div class="recommend">
      <div class="recheader">
        <div class="return" @click="backHandle"></div>智能推荐
      </div>
    <scroller
      class="my-scroller"
      ref="myScroller"
      :on-refresh="refresh"
      :on-infinite="infinite"
      snappingHeight="60"
      v-show="scrisShow"
    >
      <ul class="sblist">
        <li v-for="item,index in sblist" :key="index">
          <router-link tag="div" class="top" :to="{path:'/sbdetails',query:{sblb:item.tm_bigtype,zch:item.reg_num,isshow:true}}">
            <img :src="item.tm_img" alt="">
            <div class="font">
              <h6>{{item.tm_name}} </h6>
              <p>第{{item.tm_bigtype}}类：{{item.tm_bigtype_name}}</p>
              <p><span v-for="item in item.tm_type">{{item.goodsName}}</span></p>
              <p>售价：<i>￥{{item.price}}</i></p>
            </div>
          </router-link>
          <a href="">购买</a>
        </li>
      </ul>
      <ul class="sblist">
        <li v-for="item,index in jiazailist" :key="index">
          <router-link tag="div" class="top" :to="{path:'/sbdetails',query:{sblb:item.tm_bigtype,zch:item.reg_num,isshow:true}}">
            <img :src="item.tm_img" alt="">
            <div class="font">
              <h6>{{item.tm_name}} </h6>
              <p>第{{item.tm_bigtype}}类：{{item.tm_bigtype_name}}</p>
              <p><span v-for="item in item.tm_type">{{item.goodsName}}</span></p>
              <p>售价：<i>￥{{item.price}}</i></p>
            </div>
          </router-link>
          <a href="">购买</a>
        </li>
      </ul>
      </scroller>
    <div class="null" v-show="!scrisShow">
      <img src="../../assets/images/null.png" alt="">
      暂无相关数据
    </div>
  </div>
</template>
<script>
  import http from '../../config/http'
  let firstLoaded = false;
  export default {
    data(){
      return{
        pages:1,
        bigType:this.$route.query.sblb,
        sblist:'',
        jiazailist:[],
        scrisShow:true
      }
    },
    methods:{
      //后退
      backHandle(){
        this.$router.back();
      },
      //初始化数据
      firstHttp(){
        //初始化
        this.pages = 1;
        http.get('v1/market/shelf',{
          params:{
            page:this.pages,    //页数
            type:1,    //类型
            bigType:this.bigType
          }
        })
          .then((res)=>{
            //判断是否有数据
            if(res.data.data.count==0){
              this.scrisShow = false
            }else {
              this.sblist = res.data.data.data;
              this.jiazailist = [];
              this.$refs.myScroller.finishPullToRefresh();
              firstLoaded = true;
              console.log(res);
            }
          })
          .catch((error)=>{
            console.log(error)
          })
      },
      //上拉加载
      infinite() {
        if (!firstLoaded) {
          this.$refs.myScroller.finishInfinite();
          return;
        }
        this.pages+=1;
        http.get('v1/market/shelf',{
          params:{
            page:this.pages,    //页数
            type:1,    //类型
            bigType:this.bigType
          }
        })
          .then((res)=>{
            if(res.data.data.data==''){
              this.$refs.myScroller.finishInfinite(2);
              $('.no-data-text').css({'line-height':'40px'})
            }else {
              var datalist = res.data.data.data;
              this.jiazailist = this.jiazailist.concat(datalist)
              this.$refs.myScroller.finishInfinite();
            }
          })
          .catch((error)=>{
            console.log(error)
          })
      },
      //下拉刷新
      refresh(){
        this.firstHttp();
      },
    },
    created(){
      this.firstHttp();
      this.$buryData('capacity');
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/register.scss"
</style>
