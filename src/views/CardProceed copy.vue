<template>
<main class="checkout bg--lightgray main__wrapper">
    <Steps :steps="steps" :pageId="stepB.id"/>
<div class="main__card ">
  <div class="main__card--innerspace">
  <!-- start main content -->
      <h2 v-text="stepB.heading"></h2>
      <p v-text="stepB.text"></p>
    <div class="card">
      <img class="central-img" src="@/assets/central-img/creditCards.png" alt="credit card picture">
      <h4>Tarjeta de Credito</h4>
      <p>Lorem, ipsum dolor vitae magni odit in optio fuga perspiciatis. dolor vitae magni odit in optio fugadolor vitae magni odit in optio fuga.</p>
      <div class="row justify-content-center">
        <img class="credit-card-img" src="@/assets/visacard.png" alt="visa card">
        <img class="credit-card-img" src="@/assets/mastercard.png" alt="master card">
      </div>
      <div class="btn" @click="redirect">redirect</div>
    </div> 
    <!-- end main content -->
    <PageBtns :nextPage="nextPageB" :pageId="stepB.id" 
              :valid="true" formName="no-name"/>
  </div>  
</div>
</main>
</template>

<script>
import { loadStripe } from '@vue-stripe/vue-stripe'
import axios from 'axios'
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
import { onMounted } from 'vue'
import Steps from "@/components/pageElements/Steps.vue"
import PageBtns from "@/components/pageElements/PageBtns.vue"
export default {    
  setup(){
    let stripe = null
    onMounted( async() => {
      stripe = await loadStripe(process.env.STRIPE_PBLISHABLE_KEY)
        .catch(error => { 
          console.error("Fail to load Stripe for payment.", error)
          alert(`Fail to load Stripe for payment.`) })
    })
    function redirect(){ console.log('redirected!')
      stripe.redirectToCheckout({
        successURL: `${process.env.BASE_URL}/checkout/name`,
        cancelURL: `${process.env.BASE_URL}/checkout/completed`,
        lineItems: [{
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1,
        }],
      mode: 'payment'
      })
    }
    return { redirect }
  },
  name: "CardProceed",
  props:{
    steps: Array,
    stepB: Object,
    nextPageB: String,
    prevPageB: String
  },
  components: {
    Steps, PageBtns
  },
  async onBeforeUnmount(){
  await axios.get("http://www.mocky.io/v2/5e3d41272d00003f7ed95c09")
    .then(res => { this.$emit('fetchMsg', res.data) })
    .catch(error => {
      console.error("Payment Authentification Failed", error)
      alert(`Payment Authentification Failed.`) })
    .finally(() => this.loading = false)
    },
  data () {  
    this.publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;  
    return {
      pageId: this.stepB.id,
      loading: false
    };
  },
  methods: {
    updatePageInfo(val){
      this.$emit('fetchMsg', val)
    },
  }
 };
</script>

<style lang="scss" scoped>
@import '../stylesheets/global';
.central-img {
  height: 60px;
  width: auto;
  margin: 0 auto;
}
.card {
  padding: 1em 1.2em;
}
.credit-card-img {
  flex: 0 0 50px;
  width: 50px;
  height: auto;
  border-radius: 5px;
  margin: 0 0.5em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>