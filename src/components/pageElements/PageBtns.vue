<template>
    <!-- start prev/next btns -->
    <div class="btn--holder justify-content-between">      
        <button  class="btn btn--round btn--prev" @click="debouncedPrev" v-if="showPrev">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#3d8fcb" class="bi bi-arrow-right-circle" viewBox="-2 -2 20 20">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
          </svg>
          <span>{{this.$store.state.usedtxt.back}}</span> 
        </button>      
        <button type="submit" :disable="!valid"
                class="btn btn--round btn--next" 
                :class="{'inactive': !valid}" 
                @click="debouncedNext" v-if="showNext">
          <span v-text="proceedText"></span> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" class="bi bi-arrow-right-circle" viewBox="-2 -2 20 20">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
          </svg>
        </button>      
    </div> 
    <!-- end prev/next btns -->
</template>

<script>
//Can be replaced with lodash if more lodash functions are on demand.
const debounce = (callback, wait) => {
  let timeoutId = null
  return (...args) => {
    window.clearTimeout(timeoutId)
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args) }, wait)}}
export default ({
props: {
    pageId: { type:Number, required:true, default:null },
    nextPage:String,
    prevPage:String,
    proceedText: {type:String, default:'Continue' },
    valid: { type:Boolean, default:false }
  },
  data(){
    return {
      showNext: true,
      showPrev: false
    }
  },
watch:{
  // decide whether to show prev/next btn according to page progress
  pageId: {
    handler:function(val){
      if(val===1){                    
        this.showNext = true
        this.showPrev = false
      }else if(val >= 3){ 
        this.showNext = false
        this.showPrev = false
      }else{                     
        this.showNext = true
        this.showPrev = true
      }
      },
    immediate: true
    }
  },
  created() {
    this.debouncedNext = debounce(this.getNextRoute, 500)
    this.debouncedPrev = debounce(this.getPrevRoute, 500)
  },
methods: {
  //go to prev/next page along with actions taken
  getNextRoute(){
    if(this.valid){
      if(this.pageId===1){ this.$emit('sendRequest') }
      if(this.pageId===2){ this.$emit('checkout')}  
      }
    },
  getPrevRoute(){
    if(this.pageId===2){
        this.confirmPrev()
        this.$emit('clearName')
        return
      }
    this.$router.push({name:this.prevPage})      
    return
  },
  confirmPrev(){
    let confirmAlert =  confirm(this.$store.state.usedtxt.confirmMsg)
    if(confirmAlert){ 
        this.valid = false
        this.$router.push({name:this.prevPage})
        return
      }else{ return }}
    }  
})
</script>

<style scoped lang="scss">
@import '../../stylesheets/base';
@import '../../stylesheets/global';
.btn--holder {
  @include size(100px, 100%);
  margin-top: auto;
  flex: 1 1 100px;
  display: flex;
  .btn--next,.btn--prev {
    align-self: center;
    flex: 0 0 120px;
    transition: $transition;
    >* { align-self: center; }
    >span {
      display: block;
      width: 65px;}
    >svg { 
      @include size(1.6em); 
    }
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
    >svg { 
      margin-left: .2em; }
    &.inactive {
      opacity: .5;
      filter: grayscale(70%);
    }
  }
}
@media (max-width: $breakpoint-phone)
{
  .btn--holder {
    @include size(80px, 100%);
    padding: 0 .6em 20px;
    .btn--next,.btn--prev {
      >svg { 
        @include size(1.6em); 
      }
    }
  }
} 
@media (min-width: $breakpoint-phone) and (max-width: $breakpoint-tablet) 
{
  .btn--holder {
    @include size(100px, 100%);
    padding: 0 .6em 20px;
    .btn--next,.btn--prev {
      >svg { 
        @include size(1.6em); 
      }
    }
  }
}
@media (max-width: 375px) and (orientation: portrait)
{
  .btn--holder {
    @include size(200px, 100%);
    padding: .8em .6em 20px;
    flex-wrap: wrap;
    .btn--next,.btn--prev {
      margin-top: .8em;
      flex: 0 0 100%;
      >svg { 
        @include size(1.6em); 
      }
    }
    .btn--prev {
      @include blue-outline-style;
      text-align: left;
      justify-content: flex-start;
      >* {flex: 0 0 1}
      >svg { 
        margin-right: .2em; 
        transform: rotate(180deg);
      }
    }
    .btn--next {
      @include blue-solid-style;
      text-align: right;
      justify-content: flex-end;
      >* {flex: 0 0 1}
      >svg { 
        margin-left: .2em; }
    }
  }
} 
</style>
