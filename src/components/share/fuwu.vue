<template>
  <div class="fuwu">
      <div class="fwheader">
        <div class="fwclose" @click="hidefuwu"></div>
        <div class="fwtitle">选择服务项目</div>
      </div>
      <div class="checkbox">
        <form>
        <ul class="cheboxlist">
          <li v-for="item in smalltype">
            <input type="checkbox" :value="item.goods_id"  v-model="checkedNames">
            <label :for="item.goods_id">{{item.goods_name}}</label>
          </li>
        </ul>
        <div class="btn">
          <input type="button" value="确定" @click="doSubmit" >
          <input type="reset" @click="doreset">
        </div>
        </form>
      </div>
  </div>
</template>
<script>
  export default {
    props:['smalltype'],      //服务类目数据
    data () {
      return {
        checkedNames:[],      //数据筛选数组
      }
    },
    methods:{
        //关闭服务类目
      hidefuwu: function () {
        this.$emit('hidefuwu')
      },
      //重置数据
      doreset:function () {
        this.checkedNames = []
      },
      //提交数据
      doSubmit:function () {
        this.$emit('parfwlist',this.checkedNames.toString());
        this.$emit('hidefuwu')
        this.checkedNames =[];
        this.$buryData('serveType');
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/minpian.scss"
</style>
