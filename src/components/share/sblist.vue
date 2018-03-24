<template>
  <div>
    <scroller
      class="my-scroller"
      ref="myScroller"
      :on-refresh="refresh"
      :on-infinite="infinite"
      snappingHeight="60"
    >
      <div class="mphader">
          <h6>{{namecarddetail.realname}} &nbsp; </h6>
        <img :src="namecarddetail.user_avatar" alt="">
        <span>{{namecarddetail.card_name}}</span>
        <router-link to="/app" id="attention">
          关注
        </router-link>
      </div>
      <ul class="seachNav">
        <li @click="jiage = !jiage">价格</li>
        <li @click="sbliebie = !sbliebie">商标类别</li>
        <li @click="fuwu = !fuwu">服务类目</li>
      </ul>
            <ul class="list1" v-if="ysid==1">
        <router-link tag="li" v-for="item,index in sblist" :key="index" :to="{path:'/sbdetails',query:{sblb:item.tm_bigtype,zch:item.reg_num}}">
           <div class="img">
              <img v-bind:src="item.tm_img" alt="">
           </div>
           <div class="msg">
              <h6>{{item.tm_name}}</h6>
              <p>商标类别：{{item.tm_bigtype}}  注册号：{{item.reg_num}}</p>
              <p><span>申请人：{{item.apply_name}}</span> <img :src="item.auth_img"  alt=""></p>
              <p>商标状态：{{item.current_status}}</p>
              <p>售价：<i>￥{{parseInt(item.price)}}</i></p>
           </div>
        </router-link>
      </ul>
            <ul class="list2" v-if="ysid==2">
        <router-link tag="li" v-for="item,index in sblist" :key="index" :to="{path:'/sbdetails',query:{sblb:item.tm_bigtype,zch:item.reg_num}}">
        <div class="img"><img v-bind:src="item.tm_img" alt=""></div>
          <p class="first"><span class="gsname">{{item.apply_name}}</span> <img :src="item.auth_img" alt=""></p>
          <p><span class="leibei">{{item.tm_bigtype}}{{item.tm_bigtype_name}}</span><i>￥{{parseInt(item.price)}}</i></p>
        </router-link>
      </ul>
            <ul class="list3" v-if="ysid==3" >
        <router-link tag="li" v-for="item,index in sblist" :key="index"  :to="{path:'/sbdetails',query:{sblb:item.tm_bigtype,zch:item.reg_num}}">
          <div class="img"><img v-bind:src="item.tm_img" alt=""></div>
          <p class="first"><span class="gsname">{{item.apply_name}}</span> <img :src="item.auth_img"  alt=""></p>
          <p><span class="leibei">{{item.tm_bigtype}}{{item.tm_bigtype_name}}</span></p>
          <i>￥{{parseInt(item.price)}}</i>
        </router-link>
      </ul>
            <!--加载的数据-->
            <ul class="list1" v-if="ysid==1">
             <router-link tag="li" v-for="item,index in jiazailist" :key="index" :to="{path:'/sbdetails',query:{sblb:item.tm_bigtype,zch:item.reg_num}}">
          <div class="img">
            <img v-bind:src="item.tm_img" alt="">
          </div>
          <div class="msg">
            <h6>{{item.tm_name}}</h6>
            <p>商标类别：{{item.tm_bigtype}}  注册号：{{item.reg_num}}</p>
            <p><span>申请人：{{item.apply_name}}</span> <img :src="item.auth_img"  alt=""></p>
            <p >商标状态：{{item.current_status}}</p>
            <p>售价：<i>￥{{parseInt(item.price)}}</i></p>
          </div>
        </router-link>
      </ul>
            <ul class="list2" v-if="ysid==2">
        <router-link tag="li" v-for="item,index in jiazailist" :key="index" :to="{path:'/sbdetails',query:{sblb:item.tm_bigtype,zch:item.reg_num}}">
          <div class="img"><img v-bind:src="item.tm_img" alt=""></div>
          <p  class="first"><span class="gsname">{{item.apply_name}}</span> <img :src="item.auth_img" alt=""></p>
          <p><span class="leibei">{{item.tm_bigtype}}{{item.tm_bigtype_name}}</span><i>￥{{parseInt(item.price)}}</i></p>
        </router-link>
      </ul>
            <ul class="list3" v-if="ysid==3">
        <router-link tag="li" v-for="item,index in jiazailist" :key="index"  :to="{path:'/sbdetails',query:{sblb:item.tm_bigtype,zch:item.reg_num}}">
          <div class="img"><img v-bind:src="item.tm_img" alt=""></div>
          <p class="first"><span class="gsname">{{item.apply_name}}</span> <img :src="item.auth_img"  alt=""></p>
          <p><span class="leibei">{{item.tm_bigtype}}{{item.tm_bigtype_name}}</span></p>
          <i>￥{{parseInt(item.price)}}</i>
        </router-link>
      </ul>
       </scroller>
    <jiage v-show="jiage"  :isShow="isShow" v-on:parjiage="parjiage" v-on:hidejiage="hidejiage" v-on:showsbliebie="showsbliebie" v-on:showfuwu="showfuwu"></jiage>
    <sbliebie v-show="sbliebie" v-on:parsblblist="parsblblists" v-on:hidesbliebie="hidesbliebie" :sblblist="sblblist"></sbliebie>
    <fuwu v-show="fuwu" v-on:hidefuwu="hidefuwu"  v-on:parfwlist="parfwlists" :smalltype="smalltype"></fuwu>
    <ul class="buttomNav">
        <router-link to="/app" tag="li">
          <img src="../../assets/images/buicon01.png" alt="">收藏
        </router-link>
        <router-link to="/app" tag="li">
          <img src="../../assets/images/buicon02.png" alt="">我也要做名片
        </router-link>
        <router-link to="/app" tag="li">
          <img src="../../assets/images/buicon03.png" alt="">我的名片
        </router-link>
      </ul>
  </div>
</template>
<script>
  import jiage from '@/components/share/jiage'
  import fuwu from '@/components/share/fuwu'
  import sbliebie from '@/components/share/sbliebie'
  import http from '../../config/http'
  let firstLoaded = false;
  export default {
    data () {
      return {
          jiage:false,                                          //开关：价格组件
          fuwu:false,                                         //开关：服务类目
          sbliebie:false,                                   //开关：商标分类列表
          sblblist:'',                                     //数据：商标分类列表数据
          sblist:'',                                      //数据：商标列表数据
          ysid:'',                                       //数据：商标数据展现方式：1-2-3
          smalltype:'',                                //数据：服务列表数据
          namecarddetail:'',                         //数据：用户信息数据
          parminjiage:'',                          //参数：最小价格
          parmaxjiage:'',                        //参数：最大价格
          parsblblist:'',                      //参数：商标分类
          parfwlist:'',                       //参数：服务类目
          mpid:this.$route.query.id,             //获取用户id
          pages:1,                             //参数：page
          count:'',                          //数据：商标数据总数
          jiazailist:[],                   //数据：上拉加载数据
          isShow:true                    //开关：价格组件header开关
      }
    },
    components: {
      jiage: jiage,
      fuwu: fuwu,
      sbliebie:sbliebie,
    },
    methods:{
        // 关闭价格组件
      hidejiage:function () {
        this.jiage = false;
      },
      // 关闭服务类目组件
      hidefuwu:function () {
        this.fuwu = false;
      },
      // 关闭商标分类组件
      hidesbliebie:function () {
        this.sbliebie = false;
      },
      //显示商标分类组件
      showsbliebie:function () {
        this.sbliebie = true;
        this.jiage = false;
      },
      //显示服务类目组件
      showfuwu:function () {
        this.fuwu = true;
        this.jiage = false;
      },
      //公用ajax函数
      https:function () {
            http.get('v1/biz/name-card',{
                params:{
                    id:this.mpid,
                     page:1,
                     minPrice:this.parminjiage,
                     maxPrice:this.parmaxjiage,
                     bigtype: this.parsblblist,
                     goods:this.parfwlist
                }
             })
            .then((res)=>{
              this.jiazailist = [];
              this.pages = 1;
              this.sblist = res.data.data.trademarks.data;
            })
            .catch((error)=>{
                console.log(error)
            })
      },
      //价格筛选
      parjiage:function (data) {
        this.parminjiage = '';
        this.parmaxjiage = '';
        this.parminjiage = data.min;
        this.parmaxjiage = data.max;
        this.https();
      },
      //商标分类筛选
      parsblblists:function (data) {
        this.parsblblist = '';
        this.parsblblist = data;
        this.https();
        http.get('v1/biz/goods',{
            params:{
              tm_bigtype:data
            }
          })
          .then((res)=>{
            this.smalltype = res.data.data;
          })
          .catch((error)=>{
             console.log(error)
          })
      },
      //服务类目筛选
      parfwlists:function (data) {
        this.parfwlist = '';
        this.parfwlist = data;
        this.https();
      },
      //下拉刷新
      refresh() {
        this.parminjiage='';
        this.parmaxjiage='';
        this.parsblblist='';
        this.parfwlist='';
        this.pages =1;
        http.get('v1/biz/name-card',{
            params:{
              id:this.mpid,
              page: this.pages,
              minPrice:this.parminjiage,
              maxPrice:this.parmaxjiage,
              bigtype: this.parsblblist,
              goods:this.parfwlist
            }
        })
        .then((res)=>{
          this.sblist = res.data.data.trademarks.data;
          this.$refs.myScroller.finishPullToRefresh();
          this.jiazailist =[];
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
        http.get('v1/biz/name-card',{
            params:{
              id:this.mpid,
              page: this.pages,
              minPrice:this.parminjiage,
              maxPrice:this.parmaxjiage,
              bigtype: this.parsblblist,
              goods:this.parfwlist
            }
        })
        .then((res)=>{
              if(res.data.data.trademarks.data==''){
                  this.$refs.myScroller.finishInfinite(2);
                  $('.no-data-text').css({'line-height':'60px'})
              }else {
                  var datalist = res.data.data.trademarks.data;
                  this.jiazailist = this.jiazailist.concat(datalist)
                  this.$refs.myScroller.finishInfinite();
               }
        })
        .catch((error)=>{
           console.log(error)
        })
      },
    },
    created(){
      //获取服务类别
        http.get('v1/biz/goods/search?type=hot')
        .then((res)=>{
          this.smalltype = res.data.data
        })
        .catch((error)=>{
            console.log(error)
        })
      //获取服务类别
      http.get('v1/biz/name-card',{
            params:{
              id:this.mpid,
              page:this.pages,
            }
      })
        .then((res)=>{
            this.sblblist = res.data.data.bigtype;
            this.sblist = res.data.data.trademarks.data;
            this.ysid =  res.data.data.namecard.nc_template_id;
            this.namecarddetail = res.data.data.namecard;
            this.count = Math.ceil(res.data.data.trademarks.count/4);
            firstLoaded = true;
        })
        .catch((error)=>{
            console.log(error)
        })
    },
//    记录上次滚动的位置
    beforeRouteLeave(to,form,next){
      let scrolltop = this.$refs.myScroller && this.$refs.myScroller.getPosition() && this.$refs.myScroller.getPosition().top;
      form.meta.scrolltops = scrolltop;
      next();
    },
    //    滚动到上次的位置
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
  @import "../../assets/css/minpian.scss"
</style>

