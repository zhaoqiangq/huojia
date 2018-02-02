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
            <input type="checkbox">
            <label for="">{{item.cls_id}}{{item.cls_name}}</label>
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
    props:['sblblist'],
    data () {
      return {

      }
    },
    methods:{
      hidesbliebie: function () {
        this.$emit('hidesbliebie')
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/minpian.scss"
</style>
