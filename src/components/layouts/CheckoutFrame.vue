<template>
  <div class="main__card--innerspace" :class="chooseClass">

    <!-- start error message -->
    <div class="msg__card alert alert-danger alert-dismissible" role="alert" v-if="errorMsg.length">
       <span v-for="error in errorMsg" :key="error">{{"* "+error+" "}}</span>
       <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="closeErrorAlert">
        <span aria-hidden="true">&times;</span>
      </button>      
    </div> 
    <!-- end error message -->  

    <!-- start main content -->
    <h2 v-text="chooseHeading"></h2>
    <p v-text="chooseText"></p>
    <router-view 
      @validate="checkForm" 
      @fetchMsg="updatePageInfo"
      :fetchedData="steps[2]"
      >
    </router-view>
    <!-- end main content -->

    <!-- start prev/next btns -->
    <div class="btn--holder justify-content-between">      
        <button type="submit" class="btn btn--round btn--prev" @click="debouncedPrev" v-if="showPrev">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#3d8fcb" class="bi bi-arrow-right-circle" viewBox="-2 -2 20 20">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
          </svg>
          <span>Antirior</span> 
        </button>      
        <button type="submit" class="btn btn--round btn--next" :class="{'inactive': !valid}" @click="debouncedNext"  v-if="showNext">
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
import _ from 'lodash'
export default {
  name: "CheckoutFrame",
  props: {
    steps: Array,
    progressA: Number
  },
  data(){
    return {      
      compArr: [ {id:1, name:'NameInput'}, {id:2, name:'CardProceed'}, {id:3, name:'CheckoutCompleted'}],
      progress: this.progressA,
      errorArr:[],
      errorMsg: [],
      valid: false,
      showNext: true,
      showPrev: false
    }
  },
  watch:{
    // decide whether to shoe prev/next btn according to page progress
    progress(val){
    if(!val){                    
      this.showNext = true
      this.showPrev = false
    }else if(val >= this.steps.length-1){ 
      this.showNext = false
      this.showPrev = false
    }else{                     
      this.showNext = true
      this.showPrev = true
    }
    },
  },
    created() {
    this.debouncedNext = _.debounce(this.getNextRoute, 500)
    this.debouncedPrev = _.debounce(this.getPrevRoute, 500)
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
    //go to next/previous page and update page progress to parent el
    getNextRoute(){
      this.checkValidation()
      if(this.valid){
        if(this.progress <= (this.steps.length-2)){ this.progress++ }
        this.pageChange()
        this.closeErrorAlert()       
      }
      return
    },
    getPrevRoute(){
      this.checkValidation()
      if(this.progress===1){
          this.confirmNext()
          return
        }
      if(this.progress>=1){ this.progress-- }
      this.pageChange()        
      return
    },
    checkValidation(){
      if(!this.valid){ this.errorMsg=this.errorArr }
    },
    confirmNext(){
      let c =  confirm('You will have to re-fill the form. Do you wish to continue?')
      if(c){ 
          this.valid = false
          this.progress--
          this.pageChange()
          return
        }else{ 
          return 
        }
    },
    pageChange(){
      this.$router.push({'name': this.compArr[this.progress].name}) 
      this.$emit('switchpage',this.progress)
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
.big-content{ padding-top: 2vh; }
.mid-content{ padding-top: 9vh; }
.small-content{ padding-top: 18vh; }
.btn--holder {
  @include size(100px, 100%);
  margin-top: auto;
  flex: 1 1 100px;
  display: flex;
  padding-bottom: 20px;
  .btn--next,.btn--prev {
    align-self: center;
    flex: 0 0 120px;
    transition: $transition;
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
    &.inactive {
      opacity: .5;
      filter: grayscale(70%);
    }
  }
} 
</style>