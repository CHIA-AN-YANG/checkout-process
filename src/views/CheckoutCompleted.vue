<template>
  <div>
    <div id="diploma" class="centeral-img__holder">
      <img class="central-img" :src="getImg(stepC.image)" v-if="stepC.image" alt="diploma picture">
    </div>
    <h2>{{stepC.heading}}</h2>
    <p>{{stepC.text}}</p>
    <p>{{stepC.image}}</p>
  </div>
</template>

<script>
export default { 
  name: "CheckoutCompleted",
  props: { stepC: Object },
  computed: {
    getImg(path){
      return require(`../assets/central-img/${path}`)
    }
  }
  }
</script>

<style lang="scss" scoped>
@import '../stylesheets/global';
.central-img__holder {
  border: none;
  box-shadow: none;
  margin: 1em;
}
.central-img {
  height: 80px;
  width: auto;
  margin: 0 auto;
}

</style>