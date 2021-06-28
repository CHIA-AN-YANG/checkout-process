<template>
  <div>
    <div class="centeral-img__holder">
      <img class="central-img" src="@/assets/Certificate.svg" alt="certificate picture">
    </div>
    <h2></h2>
    <p></p>
  </div>
</template>

<script>
export default { 
  name: "CheckoutCompleted",
  props: ['fetchedData']
  };
</script>

<style lang="scss" scoped>
@import '../../stylesheets/global';
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