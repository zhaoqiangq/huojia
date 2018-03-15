<template>
  <div class="batchissue">
    <div class="header">
      <div class="return" @click="backHandle"></div>
      <input type="text" v-model="val">
      <div class="seek" @click="seche">搜索</div>
    </div>
    <ul class="batlist" v-if="types==2">
      <li v-for="item,index in sblist" >
        <div class="battop" :class="{active:index==indexs}" @click="isShow(index)">{{item.applicantCn}}，共 <span>{{item.validTmCount}}</span>个</div>
        <ul>
          <li v-for="items,index in item.trademarks" v-if="index < 2">
            <img :src="items.tm_img" alt="">
            <div class="font">
              <h6>{{items.tm_name}} </h6>
              <p><span>商标类别 ：{{items.tm_bigtype}} </span><span></span>注册号：{{items.reg_num}}</p>
              <p>申请人：{{items.apply_name}}</p>
              <p>商标状态：{{items.current_status}}</p>
            </div>
          </li>
          <div class="fubu" @click="issuesb(item.applicantCn,item.idCardNo)">发布该申请人名下所有可售商标 <img src="../../assets/images/lefticon.png" alt=""></div>
          <div class="borecolor"></div>
        </ul>
      </li>
    </ul>
    <ul class="batlist" v-if="types==1">
      <li v-for="item,index in sblist" >
        <ul class="active">
          <li>
            <img :src="item.tm_img" alt="">
            <div class="font">
              <h6>{{item.tm_name}} </h6>
              <p><span>商标类别 ：{{item.tm_bigtype}} </span><span></span>注册号：{{item.reg_num}}</p>
              <p>申请人：{{item.apply_name}}</p>
              <p>商标状态：{{item.current_status}}</p>
            </div>
          </li>
          <div class="fubu" @click="zchfabu(item.tm_bigtype,item.reg_num)">发布该申请人名下所有可售商标 <img src="../../assets/images/lefticon.png" alt=""></div>
        </ul>
      </li>
    </ul>
    <div class="null" v-if="isnull">
      <img src="../../assets/images/null.png" alt="">
      没有商标数据
    </div>
    <ul class="sellfooter">
      <router-link tag="li"  :to="{path:'/sellform'}">
        <img src="../../assets/images/sellicon03.png" alt="">发布商标
      </router-link>
      <router-link tag="li"  :to="{path:'/iissue'}">
        <img src="../../assets/images/sellicon06.png" alt="">我的发布
      </router-link>
      <li
        v-clipboard:copy="message"
        v-clipboard:success="onCopy"
      ><img src="../../assets/images/sellicon07.png" alt="">微信公众号</li>
    </ul>
  </div>
</template>
<script>
  import qs from 'qs'
  import http from '../../config/http'
  export default {
    data(){
      return{
        val:this.$route.query.vals,
        sblist:'',
        indexs:'-1',
        types:2,
        isnull:false,
        message:'尚标公众号',
      }
    },
    methods:{
      //后退
      backHandle(){
        this.$router.back();
      },
      isShow(data){
        this.indexs = this.indexs == data ? '-1':data;
      },
      sbhttp(){
        var reg = /^[\d]+$/;
        this.types = 2;
        if(reg.test(this.val)){
          this.types = 1;
        }

        http.get('v1/biz/library',{
          params:{
            type:this.types,
            keyword:this.val
          }
        })
          .then((res)=>{
            this.isnull =false;
            this.sblist = res.data.data.results;
            console.log(res);
            if(res.data.data.count==0){
              this.isnull =true;
            }
          })
          .catch((error)=>{
            console.log(error)
          })
      },
      seche(){
        this.sbhttp();
      },
      issuesb(applicantCn,idCardNo){
        http.post('/v1/biz/trademark-storage?accessToken=',
          qs.stringify({
            name:applicantCn,
            idCard:idCardNo,
          }))
          .then((res)=>{
              if(res.data.code==200){
                this.$router.push({path: '/succeedapp'});
              }
          })
          .catch((error)=>{
            console.log(error)
          })
      },
      zchfabu(tm_bigtype,reg_num){
        http.get('/v1/biz/library/1',{
          params:{
            number:reg_num,
            intCls:tm_bigtype
          }
        })
          .then((res)=>{
            http.post('/v1/biz/trademark-storage?accessToken=',
              qs.stringify({
                name:res.data.data.application,
                idCard:res.data.data.idCard,
              }))
              .then((res)=>{
                if(res.data.code==200){
                  this.$router.push({path: '/succeedapp'});
                }
              })
              .catch((error)=>{
                console.log(error)
              })
          })
          .catch((error)=>{
            console.log(error)
          })
      },
      onCopy:function (e) {
        $('.tishi #tstext').text('您已复制微信公众号，请前往微信关注');
        $('.tishi').show().delay(1500).fadeOut();
      },
    },
    created(){
        this.sbhttp();
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/sellsb.scss"
</style>
