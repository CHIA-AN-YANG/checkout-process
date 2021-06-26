<template>
    <div class="card">
      <img class="central-img" src="@/assets/creditCards.png" alt="credit card picture">
      <h4>Tarjeta de Credito</h4>
      <p>Lorem, ipsum dolor vitae magni odit in optio fuga perspiciatis. dolor vitae magni odit in optio fugadolor vitae magni odit in optio fuga.</p>
      <div class="row justify-content-center">
        <img class="credit-card-img" src="@/assets/visacard.png" alt="visa card">
        <img class="credit-card-img" src="@/assets/mastercard.png" alt="master card">
      </div>
    </div>
</template>

<script>
export default { name: "CardProceed" };
</script>

<style lang="scss" scoped>
@import '../../stylesheets/global';
.central-img {
  height: 60px;
  width: auto;
  margin: 0 auto;
}
.card {
  padding: 1em 1.2em;
}
.credit-card-img {
  flex: 0 0 50px;
  width: 50px;
  height: auto;
  border-radius: 5px;
  margin: 0 0.5em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>