<template>
  <div class="sbliebie">
    <div class="fwheader">
      <div class="fwclose" @click="hidesbliebie"></div>
      <div class="fwtitle">选择商标类别</div>
    </div>
    <div class="checkbox">
      <form>
        <ul class="cheboxlist">
          <li>
            <input type="checkbox">
            <label for="">01类化学原料</label>
          </li>
          <li>
            <input type="checkbox">
            <label for="">01类化学原料</label>
          </li>
          <li>
            <input type="checkbox">
            <label for="">01类化学原料</label>
          </li>

        </ul>
        <div class="btn">
          <input type="button" value="确定">
          <input type="reset">
        </div>
      </form>
    </div>

  </div>
</template>
<script>
  export default {
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
