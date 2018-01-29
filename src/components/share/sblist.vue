<template>
  <div>
      <div class="mphader">
          <h6>公司名称</h6>
        <img src="../../assets/images/head.png" alt="">
        <span>价格优惠给上海林总推荐的25类服装鞋帽商标名片</span>
      </div>
      <ul class="seachNav">
        <li @click="jiage = !jiage">价格</li>
        <li @click="sbliebie = !sbliebie">商标类别</li>
        <li @click="fuwu = !fuwu">服务类目</li>
      </ul>

      <jiage v-show="jiage" v-on:hidejiage="hidejiage" v-on:showsbliebie="showsbliebie" v-on:showfuwu="showfuwu"></jiage>
      <sbliebie v-show="sbliebie" v-on:hidesbliebie="hidesbliebie"></sbliebie>
      <fuwu v-show="fuwu" v-on:hidefuwu="hidefuwu"></fuwu>
      <ul class="list1">
         <li>
           <div class="img">
              <img src="../../assets/images/img.jpg" alt="">
           </div>
           <div class="msg">
              <h6>商标名称填写处</h6>
              <p>商标类别：25      注册号：53845415 </p>
              <p><span>申请人：上海尚标互联网科技有限公司</span> <img src="../../assets/images/mpicon02.png" alt=""></p>
              <p>商标状态：商标注册完成</p>
              <p>售价：<i>￥8800</i></p>
           </div>
         </li>
        <li>
          <div class="img">
            <img src="../../assets/images/img.jpg" alt="">
          </div>
          <div class="msg">
            <h6>商标名称填写处</h6>
            <p>商标类别：25      注册号：53845415 </p>
            <p><span>申请人：上海尚标互联网科技有限公司</span> <img src="../../assets/images/mpicon02.png" alt=""></p>
            <p>商标状态：商标注册完成</p>
            <p>售价：<i>￥8800</i></p>
          </div>
        </li>
        <li>
          <div class="img">
            <img src="../../assets/images/img.jpg" alt="">
          </div>
          <div class="msg">
            <h6>商标名称填写处</h6>
            <p>商标类别：25      注册号：53845415 </p>
            <p><span>申请人：上海尚标互联网科技有限公司</span> <img src="../../assets/images/mpicon02.png" alt=""></p>
            <p>商标状态：商标注册完成</p>
            <p>售价：<i>￥8800</i></p>
          </div>
        </li>
        <li>
          <div class="img">
            <img src="../../assets/images/img.jpg" alt="">
          </div>
          <div class="msg">
            <h6>商标名称填写处</h6>
            <p>商标类别：25      注册号：53845415 </p>
            <p><span>申请人：上海尚标互联网科技有限公司</span> <img src="../../assets/images/mpicon02.png" alt=""></p>
            <p>商标状态：商标注册完成</p>
            <p>售价：<i>￥8800</i></p>
          </div>
        </li>
      </ul>
      <ul class="list2">
        <li>
          <img src="../../assets/images/img.jpg" alt="">
          <p><span class="gsname">上海尚标互联网科技有限公司</span> <img src="../../assets/images/mpicon02.png" alt=""></p>
          <p><span class="leibei">03类化妆清洁</span><i>￥8800</i></p>
        </li>
        <li>
          <img src="../../assets/images/img.jpg" alt="">
          <p><span class="gsname">上海尚标互联网科技有限公司</span> <img src="../../assets/images/mpicon02.png" alt=""></p>
          <p><span class="leibei">03类化妆清洁</span><i>￥8800</i></p>
        </li>
        <li>
          <img src="../../assets/images/img.jpg" alt="">
          <p><span class="gsname">上海尚标互联网科技有限公司</span> <img src="../../assets/images/mpicon02.png" alt=""></p>
          <p><span class="leibei">03类化妆清洁</span><i>￥8800</i></p>
        </li>
        <li>
          <img src="../../assets/images/img.jpg" alt="">
          <p><span class="gsname">上海尚标互联网科技有限公司</span> <img src="../../assets/images/mpicon02.png" alt=""></p>
          <p><span class="leibei">03类化妆清洁</span><i>￥8800</i></p>
        </li>
        <li>
          <img src="../../assets/images/img.jpg" alt="">
          <p><span class="gsname">上海尚标互联网科技有限公司</span> <img src="../../assets/images/mpicon02.png" alt=""></p>
          <p><span class="leibei">03类化妆清洁</span><i>￥8800</i></p>
        </li>
        <li>
          <img src="../../assets/images/img.jpg" alt="">
          <p><span class="gsname">上海尚标互联网科技有限公司</span> <img src="../../assets/images/mpicon02.png" alt=""></p>
          <p><span class="leibei">03类化妆清洁</span><i>￥8800</i></p>
        </li>
      </ul>
      <ul class="list3">
        <router-link to="/sbdetails" tag="li">
          <img src="../../assets/images/img.jpg" alt="">
          <p><span class="gsname">上海尚标互联网科技有限公司</span> <img src="../../assets/images/mpicon02.png" alt=""></p>
          <p><span class="leibei">03类化妆清洁</span></p>
          <i>￥8800</i>
        </router-link>
        <li>
          <img src="../../assets/images/img.jpg" alt="">
          <p><span class="gsname">上海尚标互联网科技有限公司</span> <img src="../../assets/images/mpicon02.png" alt=""></p>
          <p><span class="leibei">03类化妆清洁</span></p>
          <i>￥8800</i>
        </li>
        <li>
          <img src="../../assets/images/img.jpg" alt="">
          <p><span class="gsname">上海尚标互联网科技有限公司</span> <img src="../../assets/images/mpicon02.png" alt=""></p>
          <p><span class="leibei">03类化妆清洁</span></p>
          <i>￥8800</i>
        </li>
        <li>
          <img src="../../assets/images/img.jpg" alt="">
          <p><span class="gsname">上海尚标互联网科技有限公司</span> <img src="../../assets/images/mpicon02.png" alt=""></p>
          <p><span class="leibei">03类化妆清洁</span></p>
          <i>￥8800</i>
        </li>
        <li>
          <img src="../../assets/images/img.jpg" alt="">
          <p><span class="gsname">上海尚标互联网科技有限公司</span> <img src="../../assets/images/mpicon02.png" alt=""></p>
          <p><span class="leibei">03类化妆清洁</span></p>
          <i>￥8800</i>
        </li>
        <li>
          <img src="../../assets/images/img.jpg" alt="">
          <p><span class="gsname">上海尚标互联网科技有限公司</span> <img src="../../assets/images/mpicon02.png" alt=""></p>
          <p><span class="leibei">03类化妆清洁</span></p>
          <i>￥8800</i>
        </li>
        <li>
          <img src="../../assets/images/img.jpg" alt="">
          <p><span class="gsname">上海尚标互联网科技有限公司</span> <img src="../../assets/images/mpicon02.png" alt=""></p>
          <p><span class="leibei">03类化妆清洁</span></p>
          <i>￥8800</i>
        </li>
        <li>
          <img src="../../assets/images/img.jpg" alt="">
          <p><span class="gsname">上海尚标互联网科技有限公司</span> <img src="../../assets/images/mpicon02.png" alt=""></p>
          <p><span class="leibei">03类化妆清洁</span></p>
          <i>￥8800</i>
        </li>
        <li>
          <img src="../../assets/images/img.jpg" alt="">
          <p><span class="gsname">上海尚标互联网科技有限公司</span> <img src="../../assets/images/mpicon02.png" alt=""></p>
          <p><span class="leibei">03类化妆清洁</span></p>
          <i>￥8800</i>
        </li>
      </ul>
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
  export default {
    data () {
      return {
          jiage:false,
          fuwu:false,
        sbliebie:false
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

    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/minpian.scss"
</style>

