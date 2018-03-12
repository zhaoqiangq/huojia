<template>
  <div>
    <div class="portheader">
      <div class="return" @click="backHandle"></div>
      <h6>“阿里巴巴”的注册成功率</h6>
    </div>
    <div id="main" style="width:100%;height: 400px;"></div>
    <ul class="portlist">
      <li>
          <input type="checkbox">
          <label for="">
              <h6>01类化学原料</h6>
              <div class="font">
                <div>近似数：<span>1569 </span></div>
                <div>注册成功率：<i>20%</i></div>
              </div>
          </label>
        </li>
      <li>
        <input type="checkbox">
        <label for="">
          <h6>01类化学原料</h6>
          <div class="font">
            <div>近似数：<span>1569 </span></div>
            <div>注册成功率：<i>20%</i></div>
          </div>
        </label>
      </li>
      <li>
        <input type="checkbox">
        <label for="">
          <h6>01类化学原料</h6>
          <div class="font">
            <div>近似数：<span>1569 </span></div>
            <div>注册成功率：<i>20%</i></div>
          </div>
        </label>
      </li>
      <li>
        <input type="checkbox">
        <label for="">
          <h6>01类化学原料</h6>
          <div class="font">
            <div>近似数：<span>1569 </span></div>
            <div>注册成功率：<i>20%</i></div>
          </div>
        </label>
      </li>
      <div class="button">
        <a href="">专业咨询</a>
        <a href="">我要注册</a>
      </div>
    </ul>
    <ul class="portfooter">
      <li><a href=""><img src="../../assets/images/zcicon08.png" alt="">帮我取名</a></li>
      <li><a href=""><img src="../../assets/images/zcicon09.png" alt="">购买商标</a></li>
      <li @click="isShow = !isShow"><a><img src="../../assets/images/zcicon10.png" alt="">关注我们</a></li>
    </ul>
    <ul class="footernav" v-show="isShow">
      <li><a href="">我要注册</a></li>
      <li
        v-clipboard:copy="message"
        v-clipboard:success="onCopy"
      >微信公众号</li>
      <li><a href="">下载APP</a></li>
    </ul>
  </div>
</template>
<script>
  import echarts from 'echarts'
  export default {
    name: '',
    data () {
      return {
        isShow:false,
        message:'尚标公众号',
        number:[10, 52, 200, 334, 390, 330, 1220],
        strong:['01类化学原料', '01类化学原料', '01类化学原料', '01类化学原料', '01类化学原料', '01类化学原料', '02类化学原料'],
      }
    },
    methods:{
      drawPie(id){
        this.charts = echarts.init(document.getElementById(id))
        this.charts.setOption({
          color: ['#406ff4'],
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          yAxis : [
            {
              type : 'category',
              data : this.strong,
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          xAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'直接访问',
              type:'bar',
              barWidth: '30%',
              label: {
                normal: {
                  show: true,
                  position: 'right',
                  color:'#62686f'
                }
              },
              data:this.number,
            }
          ]
        })
      },
      onCopy:function (e) {
        $('.tishi #tstext').text('您已复制微信公众号，请前往微信关注');
        $('.tishi').show().delay(1500).fadeOut();
      },
      //后退
      backHandle(){
        this.$router.back();
      },
    },
    //调用
    mounted(){
      this.$nextTick(function() {
        this.drawPie('main')
      })
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/register.scss"
</style>
