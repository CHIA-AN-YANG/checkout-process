<template>
<main class="checkout bg--lightgray main__wrapper">
  <div class="step__stuff"></div>
  <div class="main__card ">
    <div class="main__card--innerspace">
    <!-- start main content -->
      <h1>{{$store.state.usedtxt.errHeading}}</h1>
      <p>{{$store.state.usedtxt.errText}}<strong @click="toNameInput">{{$store.state.usedtxt.errLink}}</strong> </p>
      <!-- end main content -->
  </div>  
</div>
</main>
</template>

<script>
export default {
  name: "PageNotFound",
  methods: {
    toNameInput(){
      this.$router.push({name:'NameInput'})
    }
  }
}
</script>

<style scoped lang='scss'>
@import '../stylesheets/global';
@import '../stylesheets/base';
.step__stuff{
  height: 100px;
  width: 100%;
}
.main__card{
  padding-top: 20vh;
}
strong {
  color: $blue-c;
  cursor: pointer;
}
</style>