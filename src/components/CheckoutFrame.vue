<template>
  <div class="main__card--innerspace">
    
    <h2>{{heading}}</h2>
    <p>{{text}}</p>

    <UserAuth v-if="checkoutProgress === 1"/>
    <CardProceed v-else-if="checkoutProgress === 2"/>

    <div class="form--btn-holder justify-content-between">
      <button type="submit" class="btn btn--round btn--prev">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#3d8fcb" class="bi bi-arrow-right-circle" viewBox="-2 -2 20 20">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
        <span>Antirior</span> 
      </button>
      <button type="submit" class="btn btn--round btn--next">
        <span>Continuar</span> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" class="bi bi-arrow-right-circle" viewBox="-2 -2 20 20">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
      </button>
    </div> 

  </div>
</template>
<script>
import UserAuth from "@/components/UserAuth.vue";
import CardProceed from "@/components/CardProceed.vue";
export default {
  name: "CheckoutCard",
  componets: {
    UserAuth,
    CardProceed
  },
  props: {
    steps: Object,
    checkoutProgress: Number
  },
  data(){
    return {
      steps:this.steps,
      length:this.steps.length,
      checkoutProgress:this.checkoutProgress,
      heading:steps[checkoutProgress-1].heading,
      text:steps[checkoutProgress-1].text
    }
  }
};
</script>

<style scoped lang="scss">

</style>