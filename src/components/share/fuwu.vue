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
            <input type="checkbox">
            <label for="">{{item.goodsName}}</label>
          </li>

        </ul>
        <div class="btn">
          <input type="submit" value="确定">
          <input type="reset">
        </div>
        </form>
      </div>

  </div>
</template>
<script>
  export default {
    props:['smalltype'],
    data () {
      return {

      }
    },
    methods:{
      hidefuwu: function () {
        this.$emit('hidefuwu')
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/minpian.scss"
</style>
