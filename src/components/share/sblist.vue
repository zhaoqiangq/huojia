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
          <h6>{{namecarddetail.realname}}</h6>
        <img :src="namecarddetail.user_avatar" alt="">
        <span>{{namecarddetail.card_name}}</span>
      </div>
      <ul class="seachNav">
        <li @click="jiage = !jiage">价格</li>
        <li @click="sbliebie = !sbliebie">商标类别</li>
        <li @click="fuwu = !fuwu">服务类目</li>
      </ul>
      <jiage v-show="jiage" v-on:parjiage="parjiage" v-on:hidejiage="hidejiage" v-on:showsbliebie="showsbliebie" v-on:showfuwu="showfuwu"></jiage>
      <sbliebie v-show="sbliebie" v-on:parsblblist="parsblblists" v-on:hidesbliebie="hidesbliebie" :sblblist="sblblist"></sbliebie>
      <fuwu v-show="fuwu" v-on:hidefuwu="hidefuwu"  v-on:parfwlist="parfwlists" :smalltype="smalltype"></fuwu>
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
          <p><span class="gsname">{{item.apply_name}}</span> <img :src="item.is_auth" alt=""></p>
          <p><span class="leibei">{{item.tm_bigtype}}{{item.tm_bigtype_name}}</span><i>￥{{parseInt(item.price)}}</i></p>
        </router-link>
      </ul>
            <ul class="list3" v-if="ysid==3">
        <router-link tag="li" v-for="item,index in sblist" :key="index"  :to="{path:'/sbdetails',query:{sblb:item.tm_bigtype,zch:item.reg_num}}">
          <div class="img"><img v-bind:src="item.tm_img" alt=""></div>
          <p><span class="gsname">{{item.apply_name}}</span> <img :src="item.is_auth"  alt=""></p>
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
            <p>商标状态：{{item.current_status}}</p>
            <p>售价：<i>￥{{parseInt(item.price)}}</i></p>
          </div>
        </router-link>
      </ul>
            <ul class="list2" v-if="ysid==2">
        <router-link tag="li" v-for="item,index in jiazailist" :key="index" :to="{path:'/sbdetails',query:{sblb:item.tm_bigtype,zch:item.reg_num}}">
          <div class="img"><img v-bind:src="item.tm_img" alt=""></div>
          <p><span class="gsname">{{item.apply_name}}</span> <img :src="item.is_auth" alt=""></p>
          <p><span class="leibei">{{item.tm_bigtype}}{{item.tm_bigtype_name}}</span><i>￥{{parseInt(item.price)}}</i></p>
        </router-link>
      </ul>
            <ul class="list3" v-if="ysid==3">
        <router-link tag="li" v-for="item,index in jiazailist" :key="index"  :to="{path:'/sbdetails',query:{sblb:item.tm_bigtype,zch:item.reg_num}}">
          <div class="img"><img v-bind:src="item.tm_img" alt=""></div>
          <p><span class="gsname">{{item.apply_name}}</span> <img :src="item.is_auth"  alt=""></p>
          <p><span class="leibei">{{item.tm_bigtype}}{{item.tm_bigtype_name}}</span></p>
          <i>￥{{parseInt(item.price)}}</i>
        </router-link>
      </ul>
       </scroller>
    <ul class="buttomNav">
        <router-link to="/app" tag="li" >
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
          jiage:false,
          fuwu:false,
          sbliebie:false,
          sblblist:'',
          sblist:'',
          ysid:'',
          smalltype:'',
          namecarddetail:'',
          parminjiage:'',
          parmaxjiage:'',
          parsblblist:'',
          parfwlist:'',
          mpid:3,
          pages:1,
          count:'',
          jiazailist:[]
      }
    },
    components: {
      jiage: jiage,
      fuwu: fuwu,
      sbliebie:sbliebie,
    },
    methods:{
      hidejiage:function () {
        this.jiage = false;
      },
      hidefuwu:function () {
        this.fuwu = false;
      },
      hidesbliebie:function () {
        this.sbliebie = false;
      },
      showsbliebie:function () {
        this.sbliebie = true;
        this.jiage = false;
      },
      showfuwu:function () {
        this.fuwu = true;
        this.jiage = false;
      },
      https:function () {
            http.get('v1/biz/name-card',{
                params:{
                     id:this.mpid,
                     page:this.pages,
                     minPrice:this.parminjiage,
                     maxPrice:this.parmaxjiage,
                     bigtype: this.parsblblist,
                     goods:this.parfwlist
                }
             })
            .then((res)=>{
              this.sblist = res.data.data.trademarks.data;
            })
            .catch((error)=>{
                console.log(error)
            })
      },
      parjiage:function (data) {
        this.parminjiage = data.min;
        this.parmaxjiage = data.max;
        this.https();
      },
      parsblblists:function (data) {
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
      parfwlists:function (data) {
        this.parfwlist = data;
        this.https();
      },
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
      }
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
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/minpian.scss"
</style>

