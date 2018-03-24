<template>
  <div class="batchissue">
    <div class="header">
      <div class="return" @click="backHandle"></div>
      <input type="text" v-model="val">
      <div class="seek" @click="seche">搜索</div>
    </div>
    <ul class="batlist" v-if="types==2">
      <li v-for="item,index in sblist" >
        <div class="battop" :class="{active:index==indexs}" @click="isShow(index)"> <p>{{item.applicantCn}}</p>，共 <span>{{item.validTmCount}}</span>个</div>
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
        <img src="../../assets/images/sellicon04.png" alt="">发布商标
      </router-link>
      <router-link tag="li"  :to="{path:'/iissue'}">
        <img src="../../assets/images/sellicon05.png" alt="">我的发布
      </router-link>
      <li @click="ishref = !ishref"
      ><img src="../../assets/images/sellicon07.png" alt="">关注我们</li>
    </ul>
    <ul class="footlist" v-if="ishref">
      <li   v-clipboard:copy="message"
            v-clipboard:success="onCopy">微信公众号</li>
      <li><a :href="href">下载APP</a></li>
    </ul>
  </div>
</template>
<script>
  import qs from 'qs'
  import http from '../../config/http'
  export default {
    data(){
      return{
        val:this.$route.query.vals,    //搜索的信息
        sblist:'',                     //商标数据
        indexs:'-1',                  //是否申请人名下的数据
        types:2,                      //判断搜索值   1：注册号 2：申请人
        isnull:false,                //数据是否为空
        message:this.$wx(),        //微信公众号名称
        ishref:false,
        href:''
      }
    },
    methods:{
      //后退
      backHandle(){
        this.$router.back();
      },
      //展示申请人名下的数据
      isShow(data){
        this.indexs = this.indexs == data ? '-1':data;
      },
      //搜索数据共用函数
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
            if(res.data.data.count==0){
              this.isnull =true;
            }
          })
          .catch((error)=>{
            console.log(error)
          })
      },
      // 点击搜索
      seche(){
        this.sbhttp();
      },
      //发布搜索词为申请人的商标
      issuesb(applicantCn,idCardNo){
        let token = window.localStorage.getItem('shanbiao');
        if(!token){
          this.$router.push({path: '/register',query: {isaccount:true,redirect:'batchissue',query:this.val}});
        }else {
          http.post('/v1/biz/trademark-storage?accessToken=',
            qs.stringify({
              name: applicantCn,
              idCard: idCardNo,
            }))
            .then((res) => {
              if (res.data.code == 200) {
                this.$router.push({path: '/succeedapp'});
                this.$buryData('batchIssue');
              }
            })
            .catch((error) => {
              console.log(error)
            })
        }
      },
      //发布搜索词为注册号的商标
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
                  this.$buryData('batchIssue');
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
      //点击关注公众号
      onCopy:function (e) {
        $('.tishi #tstext').text('您已复制微信公众号，请前往微信关注');
        $('.tishi').show().delay(1500).fadeOut();
      },
    },
    created(){
        //默认搜索
        this.sbhttp();
        this.$buryData('tmview');
      http.get('/v1/biz/version/1',{
      })
        .then((res)=>{
          this.href = res.data.data.url;
        })
        .catch((error)=>{
          console.log(error);
        })
    },
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/sellsb.scss"
</style>
