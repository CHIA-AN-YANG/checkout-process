<template>
<main class="checkout bg--lightgray main__wrapper">
    <Steps :steps="steps" :pageId="stepB.id"/>
<div class="main__card ">
  <div class="main__card--innerspace">
  <!-- call strip checkout -->
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
  <!-- start main content -->  
    <h2 class="heading" v-text="stepB.heading"></h2>
    <p v-text="stepB.text"></p>
    <div class="card">
      <img class="central-img" src="@/assets/central-img/creditCards.png" alt="credit card picture">
      <h4>Tarjeta de Crédito</h4>
      <p>Se redirigirá a una plataforma de pago, Se trata de un proceso seguro. Puede Que la validación del pago tarde 24 horas en completarse</p>
      <div class="row justify-content-center">
        <img class="credit-card-img" src="@/assets/visacard.png" alt="visa card">
        <img class="credit-card-img" src="@/assets/mastercard.png" alt="master card">
      </div>
    </div> 
    <!-- end main content -->
    <PageBtns :nextPage="nextPageB" :prevPage="prevPageB" 
              :pageId="stepB.id" :valid="true" @checkout="submit" formName="no-name"/>
  </div>  
</div>
</main>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe';
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
import Steps from "@/components/pageElements/Steps.vue"
import PageBtns from "@/components/pageElements/PageBtns.vue"
export default { 
  name: "CardProceed",
  props:{
    steps: Array,
    stepB: Object,
    nextPageB: String,
    prevPageB: String
  },
  components: {
    Steps, PageBtns, StripeCheckout
  },
  data () {     
    return {
      pageId: this.stepB.id,
      lineItems: [{
          price: process.env.VUE_APP_STRIPE_PRICE_ID,
          quantity: 1,
        },],
      publishableKey: process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY,
      successURL: `${process.env.VUE_APP_BASE_URL}/checkout/completed`,
      cancelURL: `${process.env.VUE_APP_BASE_URL}/checkout/name`,
      loading: false
    };
  },
  methods: {
    submit () {
      // Redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout()
    },
  }
 };
</script>

<style lang="scss" scoped>
@import '../stylesheets/global';
.heading {
  margin-top: 2vh;
}
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
@media (max-width: $breakpoint-phone) {
.heading {
  margin-top: 8vh;
}
.main__card--innerspace{
  padding-left: 2em;  
  padding-right: 2em;
  padding-bottom: 100px;
}
}
@media (min-width: $breakpoint-phone) and (max-width: $breakpoint-tablet) 
{
.heading {
  margin-top: 8vh;
}
.central-img__holder {
  margin-top: 6vh;
}
}
</style>