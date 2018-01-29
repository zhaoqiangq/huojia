
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
            $('.tishi #tstext').text('验证码不正确');
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
          }else if(LUserPsd.search(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/) == 0){
              return true;
          }else{
             $('.tishi #tstext').text('密码必须6-20位，包含字母与数字');
             $('.tishi').show().delay(1000).fadeOut();
          }
	}
	//二次验证密码
	vm.prototype.$checkLPsdTo = (LUserPsdTo,LUserPsd) =>{
		  if(LUserPsd == ''){
              $('.tishi #tstext').text('请输入密码');
              $('.tishi').show().delay(1000).fadeOut();
          }else if(LUserPsd.search(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/) == 0 && LUserPsdTo ==LUserPsd){
              return true;
          }else if(LUserPsdTo != LUserPsd){
             $('.tishi #tstext').text('二次密码不统一');
             $('.tishi').show().delay(1000).fadeOut();
          }else{
              $('.tishi #tstext').text('密码必须6-20位，包含字母与数字');
              $('.tishi').show().delay(1000).fadeOut();
          }
	    }


     let local = {
       save (key, value) {
         localStorage.setItem(key, JSON.stringify(value))
       },
       fetch (key) {
         return JSON.parse(localStorage.getItem(key)) || {}
       }
     }
     vm.prototype.$local = local

   }
}


