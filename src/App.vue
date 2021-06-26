<template>
<div class="wrapper--temp">
  <Navbar/>
  <main class="checkout bg--lightgray main__wrapper">
    <Steps :stepsS="steps" :checkoutProgressS="checkoutProgress"/>
    <div class="main__card card card-body pt-2 pb-2">
      <CheckoutFrame :stepsCF="steps" :checkoutProgressCF="checkoutProgress"/>      
    </div>    
  </main>
  <img alt="Vue logo" src="./assets/logo.png">
</div>
</template>

<script>
import CheckoutFrame from "@/components/CheckoutFrame.vue";
import Steps from "@/components/Steps.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: {
    CheckoutFrame,
    Steps,
    Navbar,
  },
  data(){
    return {
      steps: [
        {
          id: 1,
          step:"MIS DATOS",
          heading:"Mis Datos",
          text:"Reviso los datos y comleta aquelo pendientes antes de continuor con el proceso."
        },
        {
          id: 2,
          step:"PAGO",
          heading:"Pago del Producto",
          text:"una vez efectuado el pago del producto, recibras un email con las detalles de la compro"
        },
        {
          id: 3,
          step:"Enhorabuena",
          heading:"",
          text:"Se ha finalizada ya el preceso de compra can exita. Recibira un email can todos los detaillies. Gracias."
        }
         ],
      checkoutProgress: 1,
    }
  }
};
</script>

<style lang="scss">
@import './stylesheets/base';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
//global
h1,h2,p {
  color: $dark-c;
}
a,a:link,a:hover,a:visited,a:active {
  text-decoration:none;
  color: $dark-c;
}
ul,li {
  list-style-type: none;
}
//reusable elements
.btn{
  position: relative;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    top: -50px;
    left: -75px;
    @include size(155px, 50px);
    background: #fff;
    opacity: .4;
    transform: rotate(35deg);
    transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
    z-index: 2;
  }
}
.btn:hover {  
  &:after {
    left: 120%;
    transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
  }
}
.main {
  &__wrapper {
    @include size(100vh, 100vw);
    background-color: $light-bg-c;
    padding-bottom: 150px;
  }
  &__card {
    max-width: 800px;
    margin: 0 auto;
    padding: 2em auto;
    text-align: center;
    &--innerspace {
      padding: 20px 100px;
    }

  }
}
</style>
