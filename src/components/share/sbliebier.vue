<template>
  <div class="sbliebie">
    <div class="fwheader">
      <div class="fwclose" @click="hidesbliebie"></div>
      <div class="fwtitle">选择商标类别</div>
    </div>
    <div class="checkbox">
      <form>
        <ul class="cheboxlist bottom">
          <li v-for="item in sblblist">
            <input type="radio" :value="item.tm_bigtype" v-model="checkedNames">
            <label :for="item.tm_bigtype">{{item.tm_bigtype}}{{item.tm_bigtype_name}}</label>
          </li>
        </ul>
        <div class="btn">
          <input type="button" value="确定" @click="doSubmit">
          <input type="reset" @click="doreset">
        </div>
      </form>
    </div>

  </div>
</template>
<script>
  export default {
    props:['sblblist'],
    data () {
      return {
        checkedNames:[],
      }
    },
    methods:{
      hidesbliebie: function () {
        this.$emit('hidesbliebie')
      },
      doreset:function () {
        this.checkedNames =[];
      },
      doSubmit:function () {
        this.$emit('parsblblist',this.checkedNames.toString());
        this.$emit('hidesbliebie')
        this.checkedNames =[];
        this.$buryData('sbSort');
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/minpian.scss"
</style>
