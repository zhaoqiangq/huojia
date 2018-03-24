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
  },"sbdetails")
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

//新手引导
let guide = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/share/guide'))
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

//消息公告
let notice = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/login/notice'))
  })
}

//404
let null404 = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/login/null404'))
  })
}


//买商标
let file = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/buyRand/file'))
  })
}

//-------------------注册商标------------------------//
let reindex = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/register/reindex'))
  })
}
let relist = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/register/relist'))
  })
}
let report = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/register/report'))
  })
}
//-------------------买商标------------------------//
let buyindex = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/buyRand/buyindex'))
  })
}
let buylist = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/buyRand/buylist'))
  })
}
let recommend = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/buyRand/recommend'))
  })
}

//-------------------卖商标------------------------//
let sellform = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/sellsb/sellform'))
  })
}

let succeedapp = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/sellsb/succeedapp'))
  })
}
let batchissue = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/sellsb/batchissue'))
  })
}
let iissue = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/sellsb/iissue'))
  })
}


//-----------------品牌维权-------------------//
let brindex = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/industrybrand/brindex'))
  })
}
let brseach = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/industrybrand/brseach'))
  })
}

let industryindex = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/industrybrand/industryindex'))
  })
}

let indseach = (resolve) => {
  return require.ensure([], () => {
    resolve(require('@/components/industrybrand/indseach'))
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
      path: '/shareCard',name: 'sbList',
      meta:{title: '分享商标列表',keepAlive: true,index:1,scrolltops:'',},
      component: sbList
    },
    {
      path: '/sbdetails',name:'sbDetails',
      meta: {title: '分享商标详情',keepAlive: true,index:2,},
      component:sbDetails  },
    {
      path: '/xqfwlist',name:'xqfwlist',
      meta: {title: '商标服务列表',keepAlive: true,index:3,},
      component:xqfwlist
    },
    {
      path: '/xqsbzt',name:'xqsbzt',
      meta: {title: '商标状态',keepAlive: true,index:3,},
      component:xqsbzt
    },
    {
      path: '/xqsqrlist',name:'xqsqrlist',
      meta: {title: '申请人信息',keepAlive: true,index:3,},
      component:xqsqrlist
    },
    {
      path: '/app',name:'app',
      meta: {title: '下载商标货架app',login:true},
      component:app
    },
    {
      path: '/guide',name:'guide',
      meta: {title: '新手引导', },
      component:guide
    },
    {
      path:'/register',name:'register',component:register,
      children:[
        {path:'/register',meta: {title: '快捷登录'},component:shortcut},
        {path:'/account',meta: {title: '账号登录'},component:account},
      ]
    },
    {
      path:'/password',
      meta: {title: '忘记密码'},
      component:password
    },
    {
      path:'/newpassword',
      meta: {title: '重新输入密码'},
      component:newpassword
    },
    {
      path:'/zhuche',
      meta: {title: '注册账号'},
      component:zhuche
    },
    {
      path:'/userxy',
      meta: {title: '用户服务协议'},
      component:userxy
    },
    {
      path:'*',
      meta: {title: '404'},
      component:null404
    },
    {
      path:'/notice',
      meta: {title: '公告消息'},
      component:notice
    },
    {
      path:'/file',
      meta: {title: '上传图片'},
      component:file
    },
    //-------注册商标------------//
    {
      path:'/reindex',
      meta: {title: '注册商标',index:0,},
      component:reindex
    },
    {
      path:'/relist',
      meta: {title: '商标列表',index:1,},
      component:relist
    },
    {
      path:'/report',
      meta: {title: '注册成功率'},
      component:report
    },
    //-----买商标----------//
    {
      path:'/buyindex',
      meta: {title: '买商标',index:0,},
      component:buyindex
    },
    {
      path:'/buylist',
      meta: {title: '商标列表',index:1,scrolltops:'', },
      component:buylist
    },
    {
      path:'/recommend',
      meta: {title: '商标列表',index:1,scrolltops:'',},
      component:recommend
    },
    //-----卖商标----------//
    {
      path:'/sellform',
      meta: {title: '卖商标',},
      component:sellform
    },
    {
      path:'/succeedapp',
      meta: {title: '下载App',},
      component:succeedapp
    },
    {
      path:'/batchissue',
      meta: {title: '卖商标',},
      component:batchissue
    },
    {
      path:'/iissue',
      meta: {title: '我的发布',login:true},
      component:iissue
    },
    //-----品牌维权----------//
    {
      path:'/brindex',
      meta: {title: '品牌维权首页',},
      component:brindex
    },
    {
      path:'/brseach',
      meta: {title: '品牌维权详情',},
      component:brseach
    },
    {
      path:'/industryindex',
      meta: {title: '行业情报首页',},
      component:industryindex
    },
    {
      path:'/indseach',
      meta: {title: '行业情报详情',},
      component:indseach
    },
  ]
})

//设置title
router.afterEach((to,from)=>{
  if(to.meta.title){
    window.document.title = to.meta.title
  }else {
    window.document.title = '商标名片'
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

// //后退不加载数据
router.beforeEach((to, from, next) => {
  console.log(to.meta.scrolltops)
  const toDepth = to.meta.index;
  const fromDepth = from.meta.index;
  if (toDepth < fromDepth) {
    from.meta.keepAlive = false
    to.meta.keepAlive = true
  }
  next()
})

export default router;
