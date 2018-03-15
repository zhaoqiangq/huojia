  <template>
    <div class="iissue">
        <div class="header">我的发布</div>
        <ul class="sblist">
            <router-link tag="li"v-for="item in sblist" :to="{path:'/sbdetails',query:{sblb:item.tm_bigtype,zch:item.reg_num}}">
            <img :src="item.tm_img" alt="">
            <div class="font">
              <h6>{{item.tm_name}} </h6>
              <p><span>商标类别 ：{{item.tm_bigtype}} </span><span></span>注册号：{{item.reg_num}}</p>
              <p>申请人：{{item.apply_name}}</p>
              <p>商标状态：{{item.current_status}}</p>
              <p>售价 <i>￥{{item.price}}</i></p>
            </div>
          </router-link>
        </ul>
      <div class="advertising" v-show="imgshow">
         <a href=""></a>
        <div @click="close"></div>
      </div>
      <ul class="sellfooter">
        <router-link tag="li"  :to="{path:'/sellform'}">
          <img src="../../assets/images/sellicon03.png" alt="">发布商标
        </router-link>
        <router-link tag="li"  :to="{path:'/iissue'}">
          <img src="../../assets/images/sellicon06.png" alt="">我的发布
        </router-link>
        <li
          v-clipboard:copy="message"
          v-clipboard:success="onCopy"
        ><img src="../../assets/images/sellicon07.png" alt="">微信公众号</li>
      </ul>
    </div>
  </template>
  <script>
    import qs from 'qs'
    import http from '../../config/http'
    export default {
        data(){
          return{
              sblist:'',
            imgshow:true,
            message:'尚标公众号',
          }
        },
      methods:{
        close(){
            this.imgshow =false
        },
        onCopy:function (e) {
          $('.tishi #tstext').text('您已复制微信公众号，请前往微信关注');
          $('.tishi').show().delay(1500).fadeOut();
        },
      },
        created(){
          http.get('/v1/market/shelf/search',{
          })
          .then((res)=>{
           this.sblist = res.data.data.data
          })
          .catch((error)=>{
            console.log(error)
          })
        }
    }
  </script>
  <style lang="scss" scoped>
    @import "../../assets/css/sellsb.scss"
  </style>
