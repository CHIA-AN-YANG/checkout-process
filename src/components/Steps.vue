<template>
  <ul class="row step__row justify-content-center">
    <li class="step__holder">
      <div class="step__ball current">
        <span class="step__inner">1</span>
      </div>
      <p>MIS DATOS</p>
    </li>
    <li class="step__connection--holder">
      <div class="step__connection--line"></div>
    </li>
    <li class="step__holder">
      <div class="step__ball on-hold">
        <span class="step__inner">2</span>
      </div>
      <p>PAGO</p>      
    </li>
    <li class="step__connection--holder">
      <div class="step__connection--line"></div>
    </li>
    <li class="step__holder">
      <div class="step__ball completed">
        <span class="step__inner">2</span>
      </div>        
    </li>
  </ul>
</template>
<script>
export default {
  name: "Steps",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>