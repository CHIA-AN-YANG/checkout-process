<template>
  <ul class="row step__row justify-content-center">
    <li class="step__holder">
      <div class="step__ball" :class="getStepClass(1)">
        <span class="step__inner" v-text="getStep(1).id"></span>
      </div>
      <p v-text="getStep(1).step"></p>
    </li>

    <li class="step__connection--holder" v-if="idx!==1">
      <div class="step__connection--line"></div>
    </li>

    <li class="step__holder">
      <div class="step__ball" :class="getStepClass(2)">
        <span class="step__inner" v-text="getStep(2).id"></span>
      </div>
      <p v-text="getStep(2).step"></p>      
    </li>
  </ul>
</template>


<script>
export default {
  name: "Steps",
  props: {
    steps: Array,
    progress: Number
  },
  data(){
    return { 
      length: this.steps.length,
      stepClasses: ['on-hold', 'current', 'completed']
    }
  },
  methods:{
  getStep(num){ return this.steps[num-1] },
  getStepClass(num){
    if(num > this.progress+1){   return this.stepClasses[2] }
    if(num === this.progress+1){ return this.stepClasses[1] }
    if(num < this.progress+1){   return this.stepClasses[0] }
  } 
  },
};
</script>

<style scoped lang="scss">
@import '../../stylesheets/base';
.step {
  &__row {
    height: 100px;
    padding: 1.5em 0;
    align-items: flex-start;
  }
  &__holder {
    position: relative;
    text-transform: uppercase;
    width: 2.4em;
    overflow: visible;
    text-align: center;
    p {
      display: inline-block;
      position:absolute;
      top: 2.4em;
      left:1.2em;
      font-size: 1em;
      font-weight: 600;
      transform: translateX(-50%);
      text-align: left;
      white-space: nowrap;
    }
  }
  &__ball {
    position: relative;
    @include size(2.4em);
    flex: 0 0 2.4em;
    border-radius: 1em;
    text-align: center;
    display: flex;
    justify-content: center;
    align-self: start;
    perspective: 1000px;
    &.current {
      @include blue-solid-style;
    }
    &.on-hold {
      @include blue-outline-style;
    }
    &.completed {
      &:after {
        content: url("../../assets/step-completed.svg");
        position: absolute;
        top: 0px;
        left:0px;
        @include size(2.3em);
        border-radius: 1.15em;
        background-color: $white-c;
        transition: $transition;
        z-index: 10;
      }
      &:before{
        content: '';
        @include ab-center;
        width: 1em; height: 1em;
        border-radius: 100%;
        border: 2px solid $blue-c;
        z-index: 5;
        animation: ring 1s both;
      }
    }
  }
  &__inner {
    font-size: 1em;
    align-self: center;
  }
  &__connection {
    &--holder{
      display: flex;
      flex: 0 1 60px;
      height: 2.4em;
      align-self: start;
      align-items: center;
      margin: 0 .5em;   
    }
    &--line {
      @include size(0,100%);
      flex: 0 0 100%;
      border: 1px solid lightslategray;
      box-sizing: content-box;
      border-radius: 0.5px;   
    }
  }
}
</style>