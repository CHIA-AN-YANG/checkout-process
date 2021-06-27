<template>
  <div>
    <div class="centeral-img__holder">
      <img class="central-img" src="@/assets/Certificate.svg" alt="certificate picture">
    </div>
    <h2 v-text="chooseHeading"></h2>
    <p v-text="chooseText"></p>
  </div>
</template>

<script>
export default { name: "CheckoutCompleted" };
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