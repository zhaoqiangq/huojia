<template>
    <div class="jiage">
      <div>
        <ul class="seachNav boreder">
          <li class="active" @click="hidejiage">价格</li>
          <li @click="showsbliebie">商标类别</li>
          <li @click="showfuwu">服务类目</li>
        </ul>
        <form >
        <div class="checkbox">
           <p>快速选择</p>
            <ul class="cheboxlist">
              <li>
                <input type="checkbox" value="0-5000" v-model="checkedNames"/>
                <label for="0-5000">0-5000</label>
              </li>
              <li>
                <input type="checkbox" value="5000-10000" v-model="checkedNames"/>
                <label for="5000-10000">5000-10000</label>
              </li>
              <li>
                <input type="checkbox" value="10000-10000000" v-model="checkedNames"/>
                <label for="10000-10000000">10000以上</label>
              </li>
            </ul>
        </div>
        <div class="mnumber">
          <p>价格区间(自定义)</p>
          <input type="number" v-model="mininputnumber"><span class="gan"></span> <input type="number" v-model="maxinputnumber">
        </div>
        <div class="buts">
              <input type="button" value="确定" @click="doSubmit">
              <input type="reset" value="重置" @click="doreset">
        </div>
        </form>
      </div>
      <div class="shade" @click="hidejiage"></div>
    </div>
</template>
<script>
  export default {
    data () {
      return {
        checkedNames:[],
        mininputnumber:'',
        maxinputnumber:''
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
      },
      minnumber:function () {
        return Math.min.apply(Math,this.checkedNames.toString().split('-').toString().split(',').map(s => +s))
      },
      maxnumber:function () {
        return Math.max.apply(Math,this.checkedNames.toString().split('-').toString().split(',').map(s => +s))
      },
      doSubmit:function () {
        if (this.mininputnumber){
          this.checkedNames.push(this.mininputnumber);
        }
        if (this.maxinputnumber){
          this.checkedNames.push(this.maxinputnumber);
        }
        let data = {
          min : this.minnumber(),
          max : this.maxnumber()
        }
        this.$emit('parjiage',data)
        this.$emit('hidejiage')
        this.checkedNames =[];
        this.mininputnumber ='';
        this.maxinputnumber ='';
        this.$buryData('listscreen','价格筛选','分享名片列表');
      },
      doreset:function () {
        this.checkedNames =[];
        this.mininputnumber ='';
        this.maxinputnumber ='';
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/css/minpian.scss"
  </style>
