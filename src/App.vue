<template>
<div class="wrapper__app">
  <Navbar/>
  <!-- start main page content -->
  <!-- 2nd line: NameInput | 3rd, 4th: Cardproceed | 5th, 6th: CheckoutCompleted -->
  <router-view :to="{ name: 'NameInput' }" :steps="steps"
  :stepA="steps[0]" :nextPageA="steps[1].name"          
  :stepB="steps[1]" :nextPageB="steps[2].name" 
  :prevPageB="steps[0].name" 
  :stepC="steps[2]" :successInfo="successInfo" 
  :prevPageC="steps[1].name"/> 
  <!-- start main page content -->    
</div>
</template>

<script>
import Navbar from "@/components/layouts/Navbar.vue";
export default {
  name: "App",
  components: { Navbar, },
  data(){
    return {
      steps: [
        {
          id: 1,
          step:"MIS DATOS",
          name: 'NameInput',
          heading:"Mis Datos",
          text:"Reviso los datos y comleta aquelo pendientes antes de continuor con el proceso.",
        },
        {
          id: 2,
          step:"PAGO",
          name: 'CardProceed',
          heading:"Pago del Producto",
          text:"una vez efectuado el pago del producto, recibras un email con las detalles de la compro",
        },
        { //will get updated by the API data
          id: 3,
          step:"", 
          heading:"",
          name:"CheckoutCompleted",
          text:"",
        }
      ],
      successInfo: { title: '', text: '', img: '' }
    } 
  },
  methods: {
    changeProgress(val){ this.currentPage = val },
  }
};
</script>

<style lang="scss">
@import './stylesheets/global';
</style>
