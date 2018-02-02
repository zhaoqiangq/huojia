<template>
  <div>
      <div class="mphader">
          <h6>{{username}}</h6>
        <img :src="namecarddetail.cover" alt="">
        <span>{{namecarddetail.name}}</span>
      </div>
      <ul class="seachNav">
        <li @click="jiage = !jiage">价格</li>
        <li @click="sbliebie = !sbliebie">商标类别</li>
        <li @click="fuwu = !fuwu">服务类目</li>
      </ul>
      <jiage v-show="jiage" v-on:parjiage="parjiage" v-on:hidejiage="hidejiage" v-on:showsbliebie="showsbliebie" v-on:showfuwu="showfuwu"></jiage>
      <sbliebie v-show="sbliebie" v-on:hidesbliebie="hidesbliebie" :sblblist="sblblist"></sbliebie>
      <fuwu v-show="fuwu" v-on:hidefuwu="hidefuwu" :smalltype="smalltype"></fuwu>
      <ul class="list1" v-if="ysid==1">
        <router-link tag="li" v-for="item,index in sblist" :key="index" :to="{path:'/sbdetails',query:{sblb:item.tm_bigtype,zch:item.reg_num}}">
           <div class="img">
              <img v-bind:src="item.tm_img" alt="">
           </div>
           <div class="msg">
              <h6>{{item.tm_name}}</h6>
              <p>商标类别：{{item.tm_bigtype}}  注册号：{{item.reg_num}}</p>
              <p><span>申请人：{{item.apply_name}}</span> <img :src="item.is_auth"  alt=""></p>
              <p>商标状态：{{item.current_status}}</p>
              <p>售价：<i>￥{{parseInt(item.price)}}</i></p>
           </div>
        </router-link>
      </ul>
      <ul class="list2" v-if="ysid==2">
        <router-link tag="li" v-for="item,index in sblist" :key="index" :to="{path:'/sbdetails',query:{sblb:item.tm_bigtype,zch:item.reg_num}}">
        <div class="img"><img v-bind:src="item.tm_img" alt=""></div>
          <p><span class="gsname">{{item.apply_name}}</span> <img :src="item.is_auth" alt=""></p>
          <p><span class="leibei">{{item.tm_bigtype}}{{item.bigtypename}}</span><i>￥{{parseInt(item.price)}}</i></p>
        </router-link>
      </ul>
      <ul class="list3" v-if="ysid==3">
        <router-link tag="li" v-for="item,index in sblist" :key="index"  :to="{path:'/sbdetails',query:{sblb:item.tm_bigtype,zch:item.reg_num}}">
          <div class="img"><img v-bind:src="item.tm_img" alt=""></div>
          <p><span class="gsname">{{item.apply_name}}</span> <img :src="item.is_auth"  alt=""></p>
          <p><span class="leibei">{{item.tm_bigtype}}{{item.bigtypename}}</span></p>
          <i>￥{{parseInt(item.price)}}</i>
        </router-link>
      </ul>
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
          username:'',
          namecarddetail:'',
          parminjiage:'',
          parmaxjiage:'',
          parsblblist:'',
          parfwlist:'',
          mpid:3,
          pages:1
      }
    },
    components: {
      jiage: jiage,
      fuwu: fuwu,
      sbliebie:sbliebie
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
            http.get('v1/brand/trademark-tm-auth/'+this.mpid+'',{
                params:{
                     page:this.pages,
                     minPrice:this.parminjiage,
                     maxPrice:this.parmaxjiage,
                     bigType: this.parsblblist,
                     type:this.parfwlist
                }
             })
            .then((res)=>{
              this.sblist = res.data.data.namecard;
            })
            .catch((error)=>{
                console.log(error)
            })
      },
      parjiage:function (data) {
        this.parminjiage = data.min;
        this.parmaxjiage = data.max;
        this.https();
      }
    },
    created(){
      http.get('v1/brand/trademark-tm-auth/'+this.mpid+'',{
          params:{
            page:this.pages,
          }
      })
        .then((res)=>{
            this.sblblist = res.data.data.bigtype;
            this.sblist = res.data.data.namecard;
            this.ysid =  res.data.data.nc_template_id;
            this.smalltype = res.data.data.smalltype;
            this.username = res.data.data.username;
            this.namecarddetail = res.data.data.namecarddetail;
            console.log(res)
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

