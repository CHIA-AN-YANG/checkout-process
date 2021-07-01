<template>
<main class="checkout bg--lightgray main__wrapper">
    <Steps :steps="steps" :pageId="stepB.id"/>
<div class="main__card ">
  <div class="main__card--innerspace">
  <!-- start main content -->  
    <h2 class="heading" v-text="stepB.heading"></h2>
    <p v-text="stepB.text"></p>
    <div class="card card__inner">
      <img class="central-img" src="@/assets/central-img/creditCards.png" alt="credit card picture">
      <h4>{{this.$store.state.usedtxt.creditCard}}</h4>
      <p>{{this.$store.state.usedtxt.creditCardText}}</p>
      <div class="row justify-content-center">
        <img class="credit-card-img" src="@/assets/visacard.png" alt="visa card">
        <img class="credit-card-img" src="@/assets/mastercard.png" alt="master card">
      </div>
    </div> 
    <!-- end main content -->
    <PageBtns :nextPage="nextPageB" :prevPage="prevPageB" @clearName="clearName"
              :pageId="stepB.id" :proceedText="transPay" :valid="true" @checkout="submit" formName="no-name"/>
  </div>  
</div>
</main>
</template>

<script>
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
    Steps, PageBtns
  },
  data () {     
    return { pageId: this.stepB.id }
  },
  computed: {
    transPay(){ return this.$store.state.usedtxt.pay}
  },
  methods: {
    submit () {
      this.$router.push({name: 'CheckoutCompleted'})
    },
    clearName(){
      this.$store.commit('removeName')
    }
  }
 };
</script>

<style lang="scss" scoped>
@import '../stylesheets/global';
.main__card--innerspace {
  padding-top: 5vh;
}
.central-img {
  height: 60px;
  width: auto;
  margin: 0 auto;
}
.card.card__inner {
  padding: 1em 1.2em;
  @include flyin;
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
.main__card--innerspace{
  padding-top: 8vh;
  padding-left: 2em;  
  padding-right: 2em;
  padding-bottom: 100px;
}
}
@media (min-width: $breakpoint-phone) and (max-width: $breakpoint-tablet) 
{
.central-img__holder {
  margin-top: 6vh;
}
.main__card--innerspace{
  padding-top: 8vh;
  padding-left: 2em;  
  padding-right: 2em;
  padding-bottom: 2em;
}
}
</style>