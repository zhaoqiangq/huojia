export default {
   install: function (vm) {
   		//验证手机输入格式
      vm.prototype.$checkLPhone = (phone) =>{
      		if(phone == ''){
      		  $('.tishi #tstext').text('请输入手机号');
            $('.tishi').show().delay(1000).fadeOut();
        }else if(phone.search(/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/)==0){
              return true;
        }else{
            $('.tishi #tstext').text('请输入正确的手机号');
            $('.tishi').show().delay(1000).fadeOut();
    	}
      };
    	// 失焦验证图和密码
	    vm.prototype.$checkLpicma = (picLyanzhengma) =>{
          if(picLyanzhengma == '') {
            $('.tishi #tstext').text('请输入验证码');
            $('.tishi').show().delay(1000).fadeOut();

          }else if(picLyanzhengma.length != 4 ) { //若输入的验证码与产生的验证码不一致时
            $('.tishi #tstext').text('图形验证码填写错误');
            $('.tishi').show().delay(1000).fadeOut();
              picLyanzhengma = '';
          }else { //输入正确时
              return true;
          }
	}
    	//验证登陆密码格式
    	vm.prototype.$checkLPsd = (LUserPsd) =>{
			   if(LUserPsd == ''){
             $('.tishi #tstext').text('请输入密码');
            $('.tishi').show().delay(1000).fadeOut();
          }else if(LUserPsd.search(/^[0-9A-Za-z]{6,32}$/) == 0){
              return true;
          }else{
             $('.tishi #tstext').text('密码必须6-30位');
             $('.tishi').show().delay(1000).fadeOut();
          }
	    }
	   //二次验证密码
	   vm.prototype.$checkLPsdTo = (LUserPsdTo,LUserPsd) =>{
		  if(LUserPsd == ''){
              $('.tishi #tstext').text('请输入密码');
              $('.tishi').show().delay(1000).fadeOut();
          }else if(LUserPsd.search(/^[0-9A-Za-z]{6,32}$/) == 0 && LUserPsdTo ==LUserPsd){
              return true;
          }else if(LUserPsdTo != LUserPsd){
             $('.tishi #tstext').text('两次密码输入不一致，请重新输入');
             $('.tishi').show().delay(1000).fadeOut();
          }else{
              $('.tishi #tstext').text('密码必须6-32位');
              $('.tishi').show().delay(1000).fadeOut();
          }
	    }
     //local storage
     let local = {
       save (key, value) {
         localStorage.setItem(key, JSON.stringify(value))
       },
       fetch (key) {
         return JSON.parse(localStorage.getItem(key)) || {}
       }
     }
     vm.prototype.$local = local

     //埋点
     //生成uuid
     function guid() {
         return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
             var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
             return v.toString(16);
          });
      }
     //获取手机的唯一识别数
      var sbuuid;
      //设置localStorage
      if (!window.localStorage.getItem('sbuuid')){
        window.localStorage.setItem('sbuuid',guid());
      }
      sbuuid =  window.localStorage.getItem('sbuuid')

      //获取token
      var token;
      if (window.localStorage.getItem('shanbiao')){
        token = window.localStorage.getItem('shanbiao')
      }

      //获取手机型号和系统
     var iponeModel;
     var u = navigator.userAgent;
     if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
       //安卓手机
        iponeModel='Android'
     } else if (u.indexOf('iPhone') > -1) {
       //苹果手机
       iponeModel = 'ios'
     } else if (u.indexOf('Windows Phone') > -1) {
       //winphone手机
       iponeModel = 'winphone'
     }
       //设备版本
       var device_version = window.navigator.appVersion;

        //埋点
       vm.prototype.$buryData = (behavior,fromPage,toPage) => {
         $.post("http://apicet.shsbip.com/api/site/devicelog",{
           action:behavior,
           type:'3',
           device_id:sbuuid,
           device_name:iponeModel,
           device_version:device_version,
           token:token,
           from_page:fromPage,
           to_page:toPage,
         },function(res){
            console.log(res);
         });
       }
   }
}


