<template>
  <div class="scrlist">
    <div class="headers">商标筛选
        <div class="return" @click="hidescreen"></div>
    </div>
    <div class="borecor"></div>
    <div class="sbbtn active" @click="sbliebie">商标类别</div>
    <div class="borecor"></div>
    <div class="sbbtn">下证时间</div>
    <form action="">
      <ul class="timenav">
        <li>
          <input type="radio" name="tiem" v-model="checkedNames" value="不限">
          <label for="">
            不限
          </label>
        </li>
        <li>
          <input type="radio" name="tiem" v-model="checkedNames" value="满1年">
          <label for="">
            满1年
          </label>
        </li>
        <li>
          <input type="radio" name="tiem" v-model="checkedNames" value="满2年">
          <label for="">
            满2年
          </label>
        </li>
        <li>
          <input type="radio" name="tiem" v-model="checkedNames" value="满3年">
          <label for="">
            满3年
          </label>
        </li>
        <li>
          <input type="radio" name="tiem" v-model="checkedNames" value="满4年">
          <label for="">
            满4年
          </label>
        </li>
        <li>
          <input type="radio" name="tiem" v-model="checkedNames" value="满5年">
          <label for="">
            满5年
          </label>
        </li>
        <li>
          <input type="radio" name="tiem" v-model="checkedNames" value="满5年以上">
          <label for="">
            满5年以上
          </label>
        </li>
      </ul>
      <div class="foorbtn">
        <input type="reset" value="重置" @click="reset">
        <input type="button" value="确认" @click="sumbit">
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        checkedNames:[],
      }
    },
    methods:{
      hidescreen: function () {
        this.$emit('hidescreen')
      },
      reset:function () {
        this.checkedNames=[];
      },
      sumbit:function () {
        this.$emit('screenMgs',this.checkedNames);
        this.$emit('hidescreen');
        this.checkedNames=[];
      },
      sbliebie:function () {
        this.$emit('showsbliebie');
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/register.scss"
</style>
