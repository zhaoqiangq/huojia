<template>
    <div class="jiage">
      <div>
        <ul class="seachNav boreder">
          <li class="active" @click="hidejiage">价格</li>
          <li @click="showsbliebie">商标类别</li>
          <li @click="showfuwu">服务类目</li>
        </ul>
        <form>
        <div class="checkbox">
           <p>快速选择</p>
            <ul class="cheboxlist">
              <li>
                <input type="checkbox"/>
                <label for="">0-5000</label>
              </li>
              <li>
                <input type="checkbox"/>
                <label for="">5000-10000</label>
              </li>
              <li>
                <input type="checkbox"/>
                <label for="">10000以上</label>
              </li>
            </ul>
        </div>
        <div class="mnumber">
          <p>价格区间(自定义)</p>
          <input type="number"><span class="gan"></span> <input type="number">
        </div>
        <div class="buts">
              <input type="button" value="确定">
              <input type="reset" value="重置">
        </div>
        </form>
      </div>
      <div class="shade" @click="hidejiage"></div>
    </div>
</template>
<script>
  export default {
    name: 'sblist',
    data () {
      return {

      }
    },
    methods:{
      hidejiage: function () {
        this.$emit('hidejiage')
      },
      showsbliebie: function () {
        this.$emit('showsbliebie')
      },
      showfuwu:function () {
        this.$emit('showfuwu')
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/minpian.scss"
  </style>
