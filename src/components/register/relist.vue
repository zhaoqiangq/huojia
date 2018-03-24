<template>
  <div class="relist">
     <div class="header">
       <div class="return" @click="backHandle"></div>
       <input type="text" v-model="val">
       <div class="seek">搜索</div>
     </div>
     <ul class="screen">
       <li @click="isactive=1" v-bind:class="{ active: isactive==1 }">已注册（在售）</li>
       <li @click="isactive=2" v-bind:class="{ active: isactive==2 }">已注册（未售）</li>
       <li @click="isactive=3" v-bind:class="{ active: isactive==3 }">未注册类别</li>
     </ul>
    <ul>
      <li class="navlist" v-show="isactive==1" >
        <div class="lists">
          <ul>
            <li>
              <input type="checkbox">
              <label for="">01类化学原料 </label>
            </li>
            <li>
              <input type="checkbox">
              <label for="">01类化学原料 </label>
            </li>
            <li>
              <input type="checkbox">
              <label for="">01类化学原料 </label>
            </li>
            <li>
              <input type="checkbox">
              <label for="">01类化学原料 </label>
            </li>
            <li>
              <input type="checkbox">
              <label for="">01类化学原料 </label>
            </li>
            <li>
              <input type="checkbox">
              <label for="">01类化学原料 </label>
            </li>
            <li>
              <input type="checkbox">
              <label for="">01类化学原料 </label>
            </li>
          </ul>
          <div class="button">
            <a href="">立即咨询</a>
            <a href="">立即购买</a>
          </div>
        </div>
        <div class="shaer" @click="none"></div>
      </li>
      <li class="navlist" v-show="isactive==2" >
        <div class="lists">
          <ul>
            <li>
              <input type="checkbox">
              <label for="">01类化学原料 </label>
            </li>
            <li>
              <input type="checkbox">
              <label for="">01类化学原料 </label>
            </li>
            <li>
              <input type="checkbox">
              <label for="">01类化学原料 </label>
            </li>
            <li>
              <input type="checkbox">
              <label for="">01类化学原料 </label>
            </li>
            <li>
              <input type="checkbox">
              <label for="">01类化学原料 </label>
            </li>
            <li>
              <input type="checkbox">
              <label for="">01类化学原料 </label>
            </li>
            <li>
              <input type="checkbox">
              <label for="">01类化学原料 </label>
            </li>
          </ul>
          <div class="button">
            <a href="">立即咨询</a>
            <a href="" class="yellow">我要求购</a>
          </div>
        </div>
        <div class="shaer" @click="none"></div>
      </li>
      <li class="navlist" v-show="isactive==3" >
        <div class="lists">
          <ul>
            <li>
              <input type="checkbox">
              <label for="">01类化学原料 </label>
            </li>
            <li>
              <input type="checkbox">
              <label for="">01类化学原料 </label>
            </li>
            <li>
              <input type="checkbox">
              <label for="">01类化学原料 </label>
            </li>
            <li>
              <input type="checkbox">
              <label for="">01类化学原料 </label>
            </li>
            <li>
              <input type="checkbox">
              <label for="">01类化学原料 </label>
            </li>
            <li>
              <input type="checkbox">
              <label for="">01类化学原料 </label>
            </li>
            <li>
              <input type="checkbox">
              <label for="">01类化学原料 </label>
            </li>
          </ul>
          <div class="button">
            <a href="">立即咨询</a>
            <a href="">查看注册成功率</a>
          </div>
        </div>
        <div class="shaer" @click="none"></div>
      </li>
    </ul>
    <scroller
      class="my-scroller"
      ref="myScroller"
      :on-refresh="refresh"
      :on-infinite="infinite"
      snappingHeight="60"
      style="top:2rem"
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
    <div class="footer-button">
      <router-link to="/report" tag="div" class="button">查看未注册类别成功率</router-link>
    </div>
  </div>
</template>
<script >
  export default{
    data(){
      return{
        val:this.$route.query.vals,
        isactive:0,
      }
    },
    methods:{
      none:function (ev) {
        this.isactive = 0;
      },
      //后退
      backHandle(){
        this.$router.back();
      },
    },
    created(){

    },
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/register.scss"
</style>
