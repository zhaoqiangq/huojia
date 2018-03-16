<template>
    <div class="buylist">
      <div class="header">
        <div class="return" @click="backHandle"></div>
        <div class="buylistsearch">
          <div class="type" @click="isActive = !isActive">{{type}}
            <ul v-show="isActive">
              <li @click="type='按行业产品'">按行业产品</li>
              <li @click="type='按商标名称'">按商标名称</li>
            </ul>
          </div>
          <input type="text" v-model="val">
        </div>
        <div class="seek" @click="sumbit">搜索</div>
      </div>
      <ul class="buynavlist">
        <li @click="defaults">默认</li>
        <li class="cut" @click="popularity"  v-bind:class="{ active: order == 2}">人气</li>
        <li class="price" @click="jiage=!jiage" :class="{ active: jiage }">价格</li>
        <li class="cut" @click="newproduct" v-bind:class="{ active: order == 3}">新品</li>
        <li class="saix" @click="screen = !screen">筛选</li>
      </ul>
      <jiage :isShow="isShow" v-show="jiage" v-on:parjiage="parjiage" v-on:hidejiage="hidejiage"></jiage>
      <screen v-show="screen" v-on:hidescreen="hidescreen" v-on:screenMgs="screenMgs" v-on:showsbliebie="showsbliebie"></screen>
      <sbliebie v-show="sbliebie" v-on:hidesbliebie="hidesbliebie" :sblblist="sblblist" v-on:parsblblist="parsblblists"></sbliebie>
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
          <div class="e-commerce">
            <a href="" @click="consult">在线咨询</a>
            <a href="" @click="buy">立即购买</a>
          </div>
          <div class="boreder"></div>
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
            <div class="e-commerce">
              <a href="">在线咨询</a>
              <a href="">立即购买</a>
            </div>
            <div class="boreder"></div>
          </li>
        </ul>
      </scroller>
      <div class="null" v-show="!scrisShow">
        <img src="../../assets/images/null.png" alt="">
        暂无相关数据
      </div>
      <ul class="butfooter">
        <li><a href=""><img src="../../assets/images/buyicon03.png" alt="">下载APP</a></li>
        <li v-clipboard:copy="message"
            v-clipboard:success="onCopy">
        <img src="../../assets/images/buyicon04.png"  alt="">
          关注微信公众号
        </li>
      </ul>
    </div>
</template>
<script>
  import jiage from '@/components/share/jiage'
  import screen from '@/components/buyRand/screen'
  import sbliebie from '@/components/share/sbliebie'
  import http from '../../config/http'
  let firstLoaded = false;
  export default{
    data(){
      return{
        pages:1,                              //参数：page页
        val:this.$route.query.vals,          //参数：搜索词
        type:this.$route.query.type,       //参数：搜索类型  行业产品|| 商标名称
        parminjiage:'',                  //参数：最小价格
        parmaxjiage:'',                //参数：最大价格
        parsblblist:'',              //参数：45分类
        screenmgs:'',              //参数：下证时间
        order:'',                 //参数：排序
        isActive:false,                  //事件：点击选择搜索类型
        message:'尚标公众号',          //复制：公众号复制
        isShow:false,                //配置：默认不显示价格组件的nav
        sbliebie:false,                   //组件：商标分类
        sblblist:'',                    //组件：45类分类表
        jiage:false,                 //组件：价格组件默认hide
        screen:false,              //组件：筛选组件默认hide
        sblist:[],               //数据：第一批数据
        jiazailist:[],         //数据：上拉加载的数据
        scrisShow:true,      //null:  无数据显示
      }
    },
    components: {
      jiage: jiage,
      screen:screen,
      sbliebie:sbliebie
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
        this.parminjiage = '';
        this.parmaxjiage = '';
        this.parsblblist = '';
        this.screenmgs = '';
        this.order ='';
        this.scrisShow = true;
        var typenumber;
        if(this.type=="按行业产品"){
          typenumber = 2
        }else {
          typenumber = 1
        }
        http.get('v1/market/shelf',{
          params:{
            page:this.pages,    //页数
            type:typenumber,    //类型
            name:this.val,     //搜索词
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
            }
          })
          .catch((error)=>{
            console.log(error)
          })
        },
      //筛选数据
      screenHttp(){
        this.pages = 1;
        this.scrisShow = true;
        var typenumber;
        if(this.type=="按行业产品"){
          typenumber = 2
        }else {
          typenumber = 1
        }
        http.get('v1/market/shelf',{
          params:{
            page:this.pages,                //页数
            type:typenumber,                //类型
            name:this.val,                //搜索词
            minPrice:this.parminjiage,  //最小价格
            maxPrice:this.parmaxjiage,  //最大价格
            bigType:this.parsblblist,   //商标分类
            year:this.screenmgs,        //下证时间
            order:this.order            //排序
          }
        })
          .then((res)=>{
            //判断是否有数据
            if(res.data.data.count==0){
              this.scrisShow = false
            }else {
              this.sblist = res.data.data.data;
              this.jiazailist = [];
              firstLoaded = true;
            }
            console.log(res);
          })
          .catch((error)=>{
            console.log(error)
          })
      },
      //复制公众号
      onCopy:function (e) {
        $('.tishi #tstext').text('您已复制微信公众号，请前往微信关注');
        $('.tishi').show().delay(1500).fadeOut();
      },
      //隐藏价格组件
      hidejiage:function () {
        this.jiage = false;
      },
      // 筛选组件隐藏
      hidescreen:function () {
        this.screen = false;
      },
      //显示商标分类列表
      showsbliebie:function () {
        this.sbliebie = true;
      },
      //隐藏商标分类列表
      hidesbliebie:function () {
        this.sbliebie = false;
      },
      //上拉加载
      infinite() {
        if (!firstLoaded) {
          this.$refs.myScroller.finishInfinite();
          return;
        }
        this.pages+=1;
        var typenumber;
        if(this.type=="按行业产品"){
          typenumber = 2
        }else {
          typenumber = 1
        }
        http.get('v1/market/shelf',{
          params:{
            page:this.pages,
            type:typenumber,
            name:this.val,
            minPrice:this.parminjiage,  //最小价格
            maxPrice:this.parmaxjiage,  //最大价格
            bigType:this.parsblblist,   //商标分类
            year:this.screenmgs,        //下证时间
            order:this.order            //排序
          }
        })
          .then((res)=>{
            if(res.data.data.data==''){
              this.$refs.myScroller.finishInfinite(2);
              $('.loading-layer').css({'height':'160px'})
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
      //点击搜索
      sumbit(){
        this.firstHttp();
      },
      //默认筛选
      defaults(){
        this.firstHttp();
      },
      //人气筛选
      popularity(){
        this.order = this.order == 2 ? 1 : 2;
        this.screenHttp();
        this.$buryData('popularity');
      },
      //价格筛选
      parjiage:function (data) {
        this.parminjiage = '';
        this.parmaxjiage = '';
        this.parminjiage = data.min;
        this.parmaxjiage = data.max;
        this.screenHttp();
      },
      //新品筛选
      newproduct:function () {
        this.order = this.order == 3 ? 4 : 3;
        this.screenHttp();
        this.$buryData('newproduct');
      },
      //商标数据筛选
      parsblblists:function (data) {
        this.parsblblist = data;
      },
      //下证时间筛选
      screenMgs:function (data) {
        this.type='按商标名称';
        this.screenmgs = data;
        this.screenHttp();
      },
      //在线咨询
      consult:function () {
        this.$buryData('consult');
      },
      //立即购买
      buy:function () {
        this.$buryData('buy');
      }
    },
    created(){
      //获取服务类别
      http.get('/v1/biz/cls')
        .then((res) => {
          this.sblblist = res.data.data;
        })
        .catch((error) => {
          console.log(error)
        })
      //初始化数据
      this.firstHttp()
      this.$buryData('searchtype');

    },
    // 记录上次滚动的位置
    beforeRouteLeave(to,form,next){
      let scrolltop = this.$refs.myScroller && this.$refs.myScroller.getPosition() && this.$refs.myScroller.getPosition().top;
      form.meta.scrolltops = scrolltop;
      next();
    },
    // 滚动到上次的位置
    beforeRouteEnter(to,from,next){
      next(vm => {
        setTimeout(function () {
          vm.$refs.myScroller.scrollTo(0, to.meta.scrolltops, false);
        },0)//同步转异步操作
      })
    },
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/register.scss"
</style>
