import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes:[
    { 
      path: '/checkout/payment', 
      name: 'CardProceed', 
      component: () => 
        import('../views/CardProceed.vue'),
        meta: { requiresAuth: true }
    },
    { 
      path: '/checkout/completed', 
      name: 'CheckoutCompleted', 
      component: () => 
        import('../views/CheckoutCompleted.vue'),
      meta: { requiresAuth: true }         
    },
    { 
      path: '/checkout/name', 
      name: 'NameInput', 
      component: () => 
        import('../views/NameInput.vue') 
    },
    { path: '/checkout/', redirect: { name: 'NameInput' } },
    { path: '/', redirect: { name: 'NameInput' } },
    { path:'/404', 
      alias:'/*', 
      name: 'PageNotFound', 
      component: () => 
        import('../views/PageNotFound.vue') }
    ]
})

router.beforeEach((to, from, next) => {
  if(to.meta.requiresAuth){   //if the requiresAuth in router exists, then do ... before sending response.
    if( store.getters.countValidNames<2 ){
      next({ name:'NameInput' })
    } 
    else next() 
  }else {next()}
})


export default router