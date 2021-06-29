<template>
    <!-- start error message -->
    <div class="msg__card alert alert-danger alert-dismissible" role="alert" v-if="errorMsg.length">
       <span v-for="error in errorMsg" :key="error">{{"* "+error+" "}}</span>
       <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="closeErrorAlert">
        <span aria-hidden="true">&times;</span>
      </button>      
    </div> 
    <!-- end error message -->  
</template>


<script>

import { loadStripe, ref } from '@vue-stripe/vue-stripe'
import { onMounted } from 'Vue'
export default {
  setup(){
    let stripe = null
    onMounted( async() => {
      stripe = await loadStripe(import.meta.env.STRIPE_PBLISHABLE_KEY)
    })

    function redirect(){
      stripe.redirectToCheckout({
        successURL: 'your-success-url',
        cancelURL: 'your-cancel-url',
        lineItems: [
        {
          price: import.meta.evn.STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: 'payment'
      })
    }
    return { redirect }
    
  },
  name: "CheckoutFrame",
  components: {
    NameInput, CardProceed, CheckoutCompleted, StripeCheckout
  },
  props: {
    steps: Array,
    progressA: Number
  },
  data(){
    this.publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    return {      
      progress: this.progressA,
      errorArr:[],
      errorMsg: [],
      valid: false,
      showNext: true,
      showPrev: false,
      loading: false,
    }
  },

  computed:{
    chooseHeading(){ 
      if(this.progress===2){return ""}
      return this.steps[this.progress].heading },
    chooseText(){
      if(this.progress===2){return ""}
      return this.steps[this.progress].text    },
    chooseClass(){ return this.steps[this.progress].class}
  },
  methods:{
    checkValidation(){
    },
    checkForm(val1, val2){ 
      this.valid=val1 
      this.errorArr=val2
    },
    updatePageInfo(val){
      this.$emit('fetchMsg', val)
    },
    closeErrorAlert(){ this.errorMsg=[] }
  }
}
</script>
<style scoped lang="scss">
@import '../../stylesheets/base';
@import '../../stylesheets/global';
.msg__card {
  position: absolute;
  top: 2px;
  left: 50%;
  width: 600px;
  transform: translateX(-50%);
  text-align: left;
  opacity: .9;
};

</style>