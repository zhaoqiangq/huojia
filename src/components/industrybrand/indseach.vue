<template>
  <div>
    <div class="headerseach">
      <div class="return" @click="backHandle"></div>
      <input type="text" v-model="val">
      <div class="seek" @click="seach">搜索</div>
    </div>
    <div class="bulletin" v-if="isshow">
      <h6>行业简报</h6>
      <ul>
        <li>
          <p><span>{{datanumber.brands}}</span>个</p>
          <p>品牌</p>
        </li>
        <li>
          <p><span>{{datanumber.items}}</span>件</p>
          <p>商品</p>
        </li>
        <li>
            <p><span>{{datanumber.sellers}}</span>件</p>
            <p>店铺</p>
        </li>
        <li>
          <p><span>{{datanumber.price}}</span>元</p>
          <p>商品均价</p>
        </li>
        <li>
          <p><span>{{datanumber.volume}}</span>件</p>
          <p>30天销量</p>
        </li>
        <li>
          <p><span>{{datanumber.prices}}</span>亿</p>
          <p>30天销售额</p>
        </li>
      </ul>
      <div class="borders"></div>
      <h6>行业销售冠军品牌</h6>
      <ul class="brandlist">
        <li v-for="item in brandas">
          <p><span class="span">{{item.title}}</span></p>
        </li>
      </ul>
      <div class="borders"></div>
      <div class="click" @click="click">深度了解品牌情况</div>
    </div>
    <div class="null" v-if="!isshow">
      <img src="../../assets/images/null.png" alt="">
      <p>暂无数据</p>
    </div>

    <ul class="brfooter">
      <li>
        <a :href="href">
          <img src="../../assets/images/buyicon03.png" alt="">
          <span>下载APP</span>
        </a>
      </li>
      <li
        v-clipboard:copy="message"
        v-clipboard:success="onCopy"
      >
        <img src="../../assets/images/buyicon04.png" alt="">
        <span>关注微信公众号</span>
      </li>
    </ul>
    <div class="Save" v-show="isalert" >
      <div class="shade"  @click="isalert = false"></div>
      <div class="alert">
        <input type="text" placeholder="请输入手机号" v-model="ipone">
        <p>
          <span>提示：</span>系统会在1小时后品牌报告以短信的形式发送给您。
        </p>
        <div class="button">
          <span  @click="isalert = false">取消</span>
          <span @click="submit">确认</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
  import http from '../../config/http'
  export default{
    data(){
      return{
        val:this.$route.query.vals,
        message:this.$wx(),
        isalert:false,
        datanumber:'',
        brandas:'',
        ipone:'',
        isshow:true,
        href:''
      }
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
      http:function () {
        this.$buryData('indseach')
        this.isshow = true;
        http.get('/v1/tool/brand',{
          params:{
            type:'cats',
            keyword: this.val
          }
        })
          .then((res)=>{
            console.log(res.data.data);
            if(res.data.data.length == 0){
                this.isshow = false;
            }else {
              this.datanumber= res.data.data.catsinfo;
              this.brandas= res.data.data.brands;
            }
          })
          .catch((error)=>{
            console.log(error);
          })
      },
      submit:function () {
          if(this.$checkLPhone(this.ipone)){
              this.$crm(this.ipone,'货架行业情报','测试');
            $('.tishi #tstext').text('您的申请已提交，我们客服会在1小时内联系您');
            $('.tishi').show().delay(1500).fadeOut();
              this.isalert = false;
            this.$buryData('indsubmit')
          }
      },
      click:function () {
        this.isalert = true;
        this.$buryData('indclick')
      },
      seach:function () {
        this.http();
      }
    },
    created(){
      this.http();
      http.get('/v1/biz/version/1',{
      })
        .then((res)=>{
          this.href = res.data.data.url;
        })
        .catch((error)=>{
          console.log(error);
        })
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/industrybrand.scss"
</style>
