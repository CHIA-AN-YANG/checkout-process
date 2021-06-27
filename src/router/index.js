import Vue from 'vue'
import Router from 'vue-router'
const ErrorPage = {
  template: `<h1>404 Not Found</h1>
  <p>Got lost? Let's go back to the <a href="${process.env.BASE_RL}">homepage.</a></p>`
}
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes:[
    { 
      path: '/user', 
      name: 'UserAuth', 
      component: () => 
        import('../components/pageContents/UserAuth.vue') 
    },
    { 
      path: '/user/:id/payment', 
      name: 'CardProceed', 
      component: () => 
        import('../components/pageContents/CardProceed.vue'),
      meta: {requiresAuth:true}
    },
    { 
      path: '/user/:id/completed', 
      name: 'CheckoutCompleted', 
      component: () => 
        import('../components/pageContents/CardProceed.vue')
         
    },
    { path: '/', redirect: '/user' },
    { path: '*', name: 'ErrorPage', component: ErrorPage}
    ]
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){
    if(!this.auth){ next({name:'UserAuth'}) }
  }else{next()}
  })

export default router