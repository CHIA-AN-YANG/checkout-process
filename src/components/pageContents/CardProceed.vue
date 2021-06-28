<template>
  <div>
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
    <button @click="submit">Pay now!</button>
  </div>
    <!-- <div class="card">
      <img class="central-img" src="@/assets/central-img/creditCards.png" alt="credit card picture">
      <h4>Tarjeta de Credito</h4>
      <p>Lorem, ipsum dolor vitae magni odit in optio fuga perspiciatis. dolor vitae magni odit in optio fugadolor vitae magni odit in optio fuga.</p>
      <div class="row justify-content-center">
        <img class="credit-card-img" src="@/assets/visacard.png" alt="visa card">
        <img class="credit-card-img" src="@/assets/mastercard.png" alt="master card">
      </div>
    </div> -->
</template>

<script>
import axios from 'axios'
import { StripeCheckout } from '@vue-stripe/vue-stripe'
export default { 
  name: "CardProceed",
    components: {
    StripeCheckout,
  },
  async mounted(){
  await axios.get("http://www.mocky.io/v2/5e3d41272d00003f7ed95c09")
    .then(res => {
      this.$emit('fetchMsg', res.data)
      })
    .catch(error => {
      console.error("Payment Authentification Failed", error)
      alert(`Payment Authentification Failed.`)
    })
    .finally(() => this.loading = false)
    },
  data () {
    this.publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    return {
      loading: false,
      lineItems: [
        {
          price: 'some-price-id', // The id of the one-time price you created in your Stripe dashboard
          quantity: 1,
        },
      ],
      successURL: 'your-success-url',
      cancelURL: 'your-cancel-url',
    };
  },
  methods: {
    submit () {
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout();
    },
  }
 };
</script>

<style lang="scss" scoped>
@import '../../stylesheets/global';
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