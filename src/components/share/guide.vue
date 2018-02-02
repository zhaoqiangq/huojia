<template>
      <div>
        <ul @click="cutimg">
          <li class="active">
            <img src="../../assets/images/guide01.jpg"  alt="">
          </li>
          <li>
            <img src="../../assets/images/guide02.jpg"  alt="">
          </li>
          <li>
            <img src="../../assets/images/guide03.jpg"  alt="">
          </li>
          <li>
            <img src="../../assets/images/guide04.jpg"  alt="">
          </li>
          <li>
            <img src="../../assets/images/guide05.jpg"  alt="">
          </li>
          <li>
            <img src="../../assets/images/guide06.jpg"  alt="">
          </li>
          <li>
            <img src="../../assets/images/guide07.jpg"  alt="">
          </li>
          <li>
            <img src="../../assets/images/guide08.jpg"  alt="">
          </li>
        </ul>
      </div>
</template>

<script>

  export default{
    data(){
      return{
        cut:0
      }
    },
    methods:{
      cutimg(){
          this.cut +=1;
          $('ul li').eq(this.cut).addClass('active').siblings().removeClass('active');
      }
    }
  }
</script>

<style lang="scss" scoped>
  ul{
    position: fixed;
    top:0;left: 0;
    right: 0;bottom: 0;
    margin: auto;
  }
  li{
    display: none;
    position: absolute;
    top:0;left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  li.active{
    display: block;
  }
  img{
    width: 100%;
    height: 100%;
  }
</style>
