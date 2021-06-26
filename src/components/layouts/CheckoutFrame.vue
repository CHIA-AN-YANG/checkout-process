<template>
  <div class="main__card--innerspace" :class="chooseClass">

    <!-- start main content -->
    <CheckoutCompleted  v-if="checkoutProgress === 3"/>
    <h2 v-text="chooseHeading"></h2>
    <p v-text="chooseText"></p>
    <UserAuth v-if="checkoutProgress === 1"/>
    <CardProceed v-else-if="checkoutProgress === 2"/>
    <!-- end main content -->

    <!-- start prev/next btns -->
    <div class="btn--holder justify-content-between">
      <button type="submit" class="btn btn--round btn--prev" @click="prev" v-if="showPrev">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#3d8fcb" class="bi bi-arrow-right-circle" viewBox="-2 -2 20 20">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
        <span>Antirior</span> 
      </button>
      <button type="submit" class="btn btn--round btn--next" @click="next"  v-if="showNext">
        <span>Continuar</span> 
        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" class="bi bi-arrow-right-circle" viewBox="-2 -2 20 20">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
        </svg>
      </button>
    </div> 
    <!-- end prev/next btns -->
  </div>
</template>
<script>
import UserAuth from "@/components/pageContents/UserAuth.vue";
import CardProceed from "@/components/pageContents/CardProceed.vue";
import CheckoutCompleted from "@/components/pageContents/CheckoutCompleted.vue";
export default {
  name: "CheckoutFrame",
  components: {
    UserAuth,
    CardProceed,
    CheckoutCompleted
  },
  props: {
    stepsCF: Array,
    checkoutProgressCF: Number
  },
  data(){
    return {
      steps:this.stepsCF,
      length:this.stepsCF.length,
      checkoutProgress:this.checkoutProgressCF,
      showNext: true,
      showPrev: false
    }
  },
  watch:{
    checkoutProgress(val){
    if(!val){                     //first page, generate next btn
      this.showNext = true
      this.showPrev = false
    }else if(val >= this.length){ //last page, generate no btn
      this.showNext = false
      this.showPrev = false
    }else{                        //other pages, generate both btn
      this.showNext = true
      this.showPrev = true
    }
    },
  },
  computed:{
    chooseHeading(){ return this.steps[this.checkoutProgress-1].heading },
    chooseText(){    return this.steps[this.checkoutProgress-1].text    },
    chooseClass(){   return this.steps[this.checkoutProgress-1].class}
  },
  methods:{
    next(){
      if(this.checkoutProgress <= (this.length-1)){this.checkoutProgress++}
      this.$emit('switchpage',this.checkoutProgress)
    },
    prev(){
      if(this.checkoutProgress){this.checkoutProgress--}
      this.$emit('switchpage',this.checkoutProgress)
    },
  }
}
</script>

<style scoped lang="scss">
@import '../../stylesheets/base';
@import '../../stylesheets/global';
.big-content{ padding-top: 2vh; }
.mid-content{ padding-top: 9vh; }
.small-content{ padding-top: 18vh; }
.btn--holder {
  margin-top: auto;
  flex: 1 1 100px;
  display: flex;
  height: 100px;
  width: 100%;
  padding-bottom: 20px;
  .btn--next,.btn--prev {
    align-self: center;
    flex: 0 0 120px;
    >* { align-self: center; }
    >svg { @include size(1.6em); }
  }
  .btn--prev {
    @include blue-outline-style;
    margin-right: auto;
    >svg { 
      margin-right: .2em; 
      transform: rotate(180deg);
    }
  }
  .btn--next {
    @include blue-solid-style;
    margin-left: auto;
    >svg { margin-left: .2em; }
  }
} 
</style>