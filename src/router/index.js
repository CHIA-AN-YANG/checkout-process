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
        import('../views/CheckoutCompleted.vue')         
    },
    { 
      path: '/checkout/name', 
      name: 'NameInput', 
      component: () => 
        import('../views/NameInput.vue') 
    },
    { path: '/', redirect: { name: 'NameInput' } },
    { path: '*', name: 'ErrorPage', component: ErrorPage}
    ]
})


export default router