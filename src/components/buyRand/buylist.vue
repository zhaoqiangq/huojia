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
        <div class="seek">搜索</div>
      </div>
      <ul class="buynavlist">
        <li>默认</li>
        <li class="cut">人气</li>
        <li class="price" @click="jiage=!jiage" :class="{ active: jiage }">价格</li>
        <li class="cut">新品</li>
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
      >
      <ul class="sblist">
        <li>
          <router-link tag="div" class="top" :to="{path:'/sbdetails',query:{sblb:25,zch:14348143}}">
            <img src="../../assets/images/img.jpg" alt="">
            <div class="font">
              <h6>商标名称填写处 </h6>
              <p>第25类 服装鞋帽</p>
              <p>服装;童装;乳罩;内裤;服装;婴儿全套衣;</p>
              <p>售价：<i>￥8800</i></p>
            </div>
          </router-link>
          <div class="e-commerce">
            <a href="">在线咨询</a>
            <a href="">立即购买</a>
          </div>
          <div class="boreder"></div>
        </li>
        <li>
          <router-link tag="div" class="top" :to="{path:'/sbdetails',query:{sblb:25,zch:14348143}}">
            <img src="../../assets/images/img.jpg" alt="">
            <div class="font">
              <h6>商标名称填写处 </h6>
              <p>第25类 服装鞋帽</p>
              <p>服装;童装;乳罩;内裤;服装;婴儿全套衣;</p>
              <p>售价：<i>￥8800</i></p>
            </div>
          </router-link>
          <div class="e-commerce">
            <a href="">在线咨询</a>
            <a href="">立即购买</a>
          </div>
          <div class="boreder"></div>
        </li>
        <li>
          <router-link tag="div" class="top" :to="{path:'/sbdetails',query:{sblb:25,zch:14348143}}">
            <img src="../../assets/images/img.jpg" alt="">
            <div class="font">
              <h6>商标名称填写处 </h6>
              <p>第25类 服装鞋帽</p>
              <p>服装;童装;乳罩;内裤;服装;婴儿全套衣;</p>
              <p>售价：<i>￥8800</i></p>
            </div>
          </router-link>
          <div class="e-commerce">
            <a href="">在线咨询</a>
            <a href="">立即购买</a>
          </div>
          <div class="boreder"></div>
        </li>
        <li>
          <router-link tag="div" class="top" :to="{path:'/sbdetails',query:{sblb:25,zch:14348143}}">
            <img src="../../assets/images/img.jpg" alt="">
            <div class="font">
              <h6>商标名称填写处 </h6>
              <p>第25类 服装鞋帽</p>
              <p>服装;童装;乳罩;内裤;服装;婴儿全套衣;</p>
              <p>售价：<i>￥8800</i></p>
            </div>
          </router-link>
          <div class="e-commerce">
            <a href="">在线咨询</a>
            <a href="">立即购买</a>
          </div>
          <div class="boreder"></div>
        </li>
        <li>
          <router-link tag="div" class="top" :to="{path:'/sbdetails',query:{sblb:25,zch:14348143}}">
            <img src="../../assets/images/img.jpg" alt="">
            <div class="font">
              <h6>商标名称填写处 </h6>
              <p>第25类 服装鞋帽</p>
              <p>服装;童装;乳罩;内裤;服装;婴儿全套衣;</p>
              <p>售价：<i>￥8800</i></p>
            </div>
          </router-link>
          <div class="e-commerce">
            <a href="">在线咨询</a>
            <a href="">立即购买</a>
          </div>
          <div class="boreder"></div>
        </li>
        <li>
          <router-link tag="div" class="top" :to="{path:'/sbdetails',query:{sblb:25,zch:14348143}}">
            <img src="../../assets/images/img.jpg" alt="">
            <div class="font">
              <h6>商标名称填写处 </h6>
              <p>第25类 服装鞋帽</p>
              <p>服装;童装;乳罩;内裤;服装;婴儿全套衣;</p>
              <p>售价：<i>￥8800</i></p>
            </div>
          </router-link>
          <div class="e-commerce">
            <a href="">在线咨询</a>
            <a href="">立即购买</a>
          </div>
          <div class="boreder"></div>
        </li>
        <li>
          <router-link tag="div" class="top" :to="{path:'/sbdetails',query:{sblb:25,zch:14348143}}">
            <img src="../../assets/images/img.jpg" alt="">
            <div class="font">
              <h6>商标名称填写处 </h6>
              <p>第25类 服装鞋帽</p>
              <p>服装;童装;乳罩;内裤;服装;婴儿全套衣;</p>
              <p>售价：<i>￥8800</i></p>
            </div>
          </router-link>
          <div class="e-commerce">
            <a href="">在线咨询</a>
            <a href="">立即购买</a>
          </div>
          <div class="boreder"></div>
        </li>
        <li>
          <router-link tag="div" class="top" :to="{path:'/sbdetails',query:{sblb:25,zch:14348143}}">
            <img src="../../assets/images/img.jpg" alt="">
            <div class="font">
              <h6>商标名称填写处 </h6>
              <p>第25类 服装鞋帽</p>
              <p>服装;童装;乳罩;内裤;服装;婴儿全套衣;</p>
              <p>售价：<i>￥8800</i></p>
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
  export default{
    data(){
      return{
        val:this.$route.query.vals,
        type:this.$route.query.type,
        isActive:false,
        message:'尚标公众号',
        isShow:false,
        jiage:false,
        parminjiage:'',
        parmaxjiage:'',
        screen:false,
        screenmgs:'',
        sbliebie:false,
        sblblist:'',
        parsblblist:'',
        pages:1,
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
      onCopy:function (e) {
        $('.tishi #tstext').text('您已复制微信公众号，请前往微信关注');
        $('.tishi').show().delay(1500).fadeOut();
      },
      hidejiage:function () {
        this.jiage = false;
      },
      parjiage:function (data) {
        this.parminjiage = '';
        this.parmaxjiage = '';
        this.parminjiage = data.min;
        this.parmaxjiage = data.max;
      },
      hidescreen:function () {
        this.screen = false;
      },
      screenMgs:function (data) {
        this.screenmgs = data;
      },
      showsbliebie:function () {
        this.sbliebie = true;
      },
      hidesbliebie:function () {
        this.sbliebie = false;
      },
      parsblblists:function (data) {
        this.parsblblist = data;
      }
    },
    created(){
      //获取服务类别
      http.get('/v1/biz/cls')
        .then((res)=>{
          this.sblblist = res.data.data;
        })
        .catch((error)=>{
          console.log(error)
        })
      var typenumber;
      if(this.$route.query.type=="按行业产品"){
        typenumber = 2
      }else {
        typenumber = 1
      }
      http.get('v1/market/shelf',{
        params:{
            page:this.pages,
            type:typenumber,
            name:this.$route.query.vals,
          }
        })
        .then((res)=>{
          console.log(res);
        })
        .catch((error)=>{
          console.log(error)
        })
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/register.scss"
</style>
