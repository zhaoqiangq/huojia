<template>
  <div class="sellform">
    <ul class="formnav">
      <li :class="{active:isShow}" @click="isShow=true">单个发布</li>
      <li :class="{active:!isShow}" @click="isShow=false">批量发布</li>
    </ul>
    <div class="borcolor"></div>
    <div v-show="isShow">
      <div class="liebei" @click="sbliebie=true">
        <span>商标类别：</span>
        <i><span v-show="!parsblblist">请选择</span> <span v-show="parsblblist">第{{parsblblist}}类</span></i>
      </div>
      <div class="borcolor"></div>
      <ul class="formlist">
        <li>
          <span>商标注册号：</span>
          <input type="text" placeholder="请输入商标注册号" v-model="registration">
          <div class="chaxu" @click="query">开始查询</div>
        </li>
        <li>
          <span>商标名称：</span>
          <input type="text" placeholder="请输入商标名称" v-model="name">
        </li>
        <li>
          <span>商标价格：</span>
          <input type="text" placeholder="请填写您的商标出售价格" v-model="money">
        </li>
      </ul>
      <div class="fabu" @click="submit">立即发布 </div>
    </div>
    <div class="chainput" v-show="!isShow">
      <input type="text" placeholder="请输入商标申请人名称或注册号" v-model="searchword">
      <input type="button" value="查询" @click="searchs">
    </div>
    <sbliebie v-show="sbliebie" v-on:hidesbliebie="hidesbliebie" :sblblist="sblblist" v-on:parsblblist="parsblblists"></sbliebie>
    <div class="fontalert">
        <span>提示：交易由平台担保双方利益执行；交易成功平台将收取20%服务费。</span>
        <div v-if="issafari" @click="safarshows = true"><img src="../../assets/images/zcicon03.png" alt="">点击此处保存到桌面</div>
      </div>
    <div class="safaris" v-show="safarshows">
      <div class="shade" @click="safarshows  = false"></div>
      <div class="imgs"></div>
    </div>
    <ul class="sellfooter">
      <router-link tag="li"  :to="{path:'/sellform'}">
        <img src="../../assets/images/sellicon04.png" alt="">发布商标
      </router-link>
      <router-link tag="li"  :to="{path:'/iissue'}">
        <img src="../../assets/images/sellicon05.png" alt="">我的发布
      </router-link>
      <li
        v-clipboard:copy="message"
        v-clipboard:success="onCopy"
      ><img src="../../assets/images/sellicon07.png" alt="">微信公众号</li>
    </ul>
  </div>
</template>
<script>
  import sbliebier from '@/components/share/sbliebier'
  import qs from 'qs'
  import http from '../../config/http'
  export default {
    data(){
        return{
                  isShow:true,                             //单个/批量  title切换
                sbliebie:false,                           //是否展示商标分类表
                sblblist:'',                              //商标类别数据
             parsblblist:this.$route.query.parsblblist,  //参数：商标类别参数
            registration:this.$route.query.registration, //参数：注册号参数
                    sbmgs:'',
                     name:this.$route.query.name,         //单个发布：商标名称
                   istrue:this.$route.query.istrue,       //单个发布：判断是否点击发布
                    money:this.$route.query.money,        //单个发布：商标价格
               searchword:'',                             //批量发布：搜索的信息
                  message:'尚标公众号',                  //复制的公众号名称
                 issafari:false,                         //判断是否显示点击下载桌面
               safarshows: false                        //点击弹出引导下载到桌面的流程
          }
      },
    components: {
      sbliebie:sbliebier,
    },
    methods:{
      //隐藏商标分类列表
      hidesbliebie:function () {
        this.sbliebie = false;
      },
      //商标数据筛选
      parsblblists:function (data) {
        this.parsblblist = data;
      },
      //查询商标
      query:function () {
          if(this.parsblblist==undefined){
            $('.tishi #tstext').text('请选择商标类别');
            $('.tishi').show().delay(2000).fadeOut();
            return;
          }
          if(this.registration==undefined){
            $('.tishi #tstext').text('请输入注册号');
            $('.tishi').show().delay(2000).fadeOut();
            return;
          }
        http.get('/v1/biz/trademark/'+this.registration+'',{
          params:{
            intCls:this.parsblblist
          }
        })
          .then((res)=>{
            this.sbmgs=res.data.data;
            this.name = res.data.data.tm_name;
            this.istrue = true;
            this.$buryData('query');
          })
          .catch((error)=>{
            $('.tishi #tstext').text(error.response.data.message);
            $('.tishi').show().delay(2000).fadeOut();
          })
      },
      //点击发布
      submit:function () {
        if(!this.istrue){
          $('.tishi #tstext').text('请查询商标可否发布');
          $('.tishi').show().delay(2000).fadeOut();
          return;
        }
        if(!this.money){
          $('.tishi #tstext').text('请输入商标价格');
          $('.tishi').show().delay(2000).fadeOut();
          return;
        }
        let token = window.localStorage.getItem('shanbiao');
        if(!token){
          this.$router.push({path: '/register',query: {isaccount:true,redirect:'sellform',registration:this.registration,parsblblist:this.parsblblist,money:this.money,name:this.name}});
        }else {
          http.post('/v1/market/shelf',
            qs.stringify({
              tm_bigtype:this.parsblblist,
              reg_num:this.registration,
              price:this.money
            }))
            .then((res)=>{
              if(res.data.data.row==0){
                $('.tishi #tstext').text('不能上架重复的商标');
                $('.tishi').show().delay(2000).fadeOut();
              }else if(res.data.data.row==1){
                this.$router.push({path: '/succeedapp'});
                this.$buryData('singleIssue');
              }
            })
            .catch((error)=>{
              $('.tishi #tstext').text(error.response.data.message);
              $('.tishi').show().delay(2000).fadeOut();
            })
        }
      },
      //批量搜索
      searchs:function () {
        if(this.searchword==''){
          $('.tishi #tstext').text('请输入商标名称');
          $('.tishi').show().delay(1000).fadeOut();
        }else {
          this.$router.push({path: '/batchissue',query: {vals: this.searchword}});
        }
      },
      // 公众号名称复制
      onCopy:function (e) {
        $('.tishi #tstext').text('您已复制微信公众号，请前往微信关注');
        $('.tishi').show().delay(1500).fadeOut();
      },
    },
    created(){
      //获取商标类别
      http.get('/v1/biz/cls')
        .then((res) => {
          this.sblblist = res.data.data;
        })
        .catch((error) => {
          console.log(error)
        })
      //判断是否为safari
      if(this.$safari()){
          this.issafari = true;
      }

    },
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/sellsb.scss"
</style>
