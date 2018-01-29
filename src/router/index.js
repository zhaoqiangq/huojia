import Vue from 'vue'
import Router from 'vue-router'

//名片分享列表
let sbList = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/share/sblist'))
  })
}
//名片分享详情
let sbDetails = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/share/sbdetails'))
  }, "sbdetails")
}
//名片分享详情-服务列表
let xqfwlist = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/share/xqfwlist'))
  }, "sbdetails")
}
//名片分享详情-商标状态
let xqsbzt = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/share/xqsbzt'))
  }, "sbdetails")
}
//名片分享详情-申请人信息
let xqsqrlist = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/share/xqsqrlist'))
  }, "sbdetails")
}

//app下载地址
let app = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/share/app'))
  })
}


//登录头部
let register = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/login/register'))
  }, "register")
}
//快捷登录
let shortcut = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/login/shortcut'))
  }, "register")
}
//账号登录
let account = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/login/account'))
  }, "register")
}


//找回密码
let password = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/login/password'))
  }, "passwords")
}
//重新输入密码
let newpassword = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/login/newpassword'))
  }, "passwords")
}

//注册
let zhuche = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/login/zhuche'))
  })
}

//用户协议
let userxy = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/login/userxy'))
  })
}

Vue.use(Router)

let router = new Router({
  linkActiveClass:'is-active',
  mode:'history',
  scrollBehavior(to,form,savePosition){
    if(savePosition){
      return savePosition
    }else{
      return {x:0,y:0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'sbList',
      meta: {
        title: '分享商标列表'
      },
      // alias: '/index',
      component: sbList
    },
    {
      path: '/sbdetails',
      name:'sbDetails',
      meta: {
        title: '分享商标详情'
      },
      component:sbDetails
    },
    {
      path: '/xqfwlist',
      name:'xqfwlist',
      meta: {
        title: '商标服务列表'
      },
      component:xqfwlist
    },
    {
      path: '/xqsbzt',
      name:'xqsbzt',
      meta: {
        title: '商标状态'
      },
      component:xqsbzt
    },
    {
      path: '/xqsqrlist',
      name:'xqsqrlist',
      meta: {
        title: '申请人信息'
      },
      component:xqsqrlist
    },
    {
      path: '/app',
      name:'app',
      meta: {
        title: '下载商标货架app',
        login:true
      },
      component:app
    },
    {
      path:'/register',
      name:'register',
      component:register,
      children:[
        {path:'/register',meta: {title: '快捷登录'},component:shortcut},
        {path:'/account',meta: {title: '账号登录'},component:account},
      ]
    },
    {
      path:'/password',
      meta: {
        title: '忘记密码'
      },
      component:password
    },
     {
      path:'/newpassword',
       meta: {
         title: '重新输入密码'
       },
      component:newpassword
    },
    {
      path:'/zhuche',
      meta: {
        title: '注册账号'
      },
      component:zhuche
    },
    {
      path:'/userxy',
      meta: {
        title: '用户服务协议'
      },
      component:userxy
    }

  ]
})

//设置title
router.afterEach((to,from)=>{
  if(to.meta.title){
    window.document.title = to.meta.title
  }else {
    window.document.title = '商标货架'
  }
})

//自动登录
router.beforeEach((to, from, next) => {
  let token = window.localStorage.getItem('shanbiao');
  if (to.matched.some(record => record.meta.login) && (!token || token === null)) {
    next({
      path: '/register',
      query: {
        redirect: to.path.slice(1)
      }
    })
  } else {
      next()
  }
})


export default router;
