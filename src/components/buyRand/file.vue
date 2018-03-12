<template>
  <div class='finish_room'>
    <div class='finish_room2'>
      <div class='room_img'>
        <img :src="imgs">
      </div>
      <div class='room_add_btn'>
        <span>上传图片</span>
        <input @change='add_img'  type="file">
      </div>
    </div>
  </div>
</template>
<script >
  module.exports={
    data:function(){
      return{
        imgs:'',
      }
    },
    props:{},
    methods:{
      add_img(event){
        var reader =new FileReader();
        var img1=event.target.files[0];
        reader.readAsDataURL(img1);
        var that=this;
        reader.onloadend=function(){
          that.imgs = reader.result
        }
      },
    },
  }

</script>
<style scoped >
  img{
    width: 100%;
  }
</style>
