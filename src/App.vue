<template>
<div class="wrapper__app">
  <Navbar/>
  <main class="checkout bg--lightgray main__wrapper">
    <Steps :stepsS="steps" :checkoutProgressS="checkoutProgress"/>
    <div class="main__card ">
      <CheckoutFrame :stepsCF="steps" :checkoutProgressCF="checkoutProgress"/>      
    </div>    
  </main>
</div>
</template>

<script>
import CheckoutFrame from "@/components/layouts/CheckoutFrame.vue";
import Steps from "@/components/layouts/Steps.vue";
import Navbar from "@/components/layouts/Navbar.vue";
export default {
  name: "App",
  components: { CheckoutFrame, Steps, Navbar, },
  data(){
    return {
      steps: [
        {
          id: 1,
          step:"MIS DATOS",
          heading:"Mis Datos",
          text:"Reviso los datos y comleta aquelo pendientes antes de continuor con el proceso.",
          class:"mid-content"
        },
        {
          id: 2,
          step:"PAGO",
          heading:"Pago del Producto",
          text:"una vez efectuado el pago del producto, recibras un email con las detalles de la compro",
          class:"big-content"
        },
        {
          id: 3,
          step:"",
          heading:"Enhorabuena",
          text:"Se ha finalizada ya el preceso de compra can exita. Recibira un email can todos los detaillies. Gracias.",
          class:"small-content"
        }
         ],
      checkoutProgress: 1,
    }
  }
};
</script>

<style lang="scss">
@import './stylesheets/global';
.main {
  &__wrapper {
    @include size(100vh, 100vw);
    background-color: $light-bg-c;
    padding-bottom: 150px;
  }
  &__card {
    position: relative;
    overflow: hidden;
    max-width: 1000px;
    height: 68vh;
    margin: 0 auto;
    text-align: center;
    border-radius: 0;
    background-color: $white-c;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    &--innerspace {
      position: relative;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      align-items: center;
      height: 100%;
      width: 500px;
    }
  }
}
</style>
