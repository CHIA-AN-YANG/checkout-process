<template>
<div class="wrapper__app">
  <Navbar/>

  <!-- start main page content -->
  <!-- 2nd line: NameInput | 3rd, 4th: Cardproceed | 5th line: CheckoutCompleted -->
  <router-view :to="{ name: 'NameInput' }" :steps="steps"
  :stepA="steps[0]" :nextPageA="steps[1].name"          
  :stepB="steps[1]" :nextPageB="steps[2].name" 
  :prevPageB="steps[0].name" @fetchMsg="updatePageInfo" 
  :stepC="steps[2]" :prevPageC="steps[1].name"/> 
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
          image: ""
        },
        {
          id: 2,
          step:"PAGO",
          name: 'CardProceed',
          heading:"Pago del Producto",
          text:"una vez efectuado el pago del producto, recibras un email con las detalles de la compro",
          class:"big-content",
          image: ""
        },
        {
          id: 3,
          step:"",
          heading:"",
          name:"CheckoutCompleted",
          text:"",
          class:"small-content",
          image: ""
        }
         ],
      currentPage: 0,
      errorMsg: []
    }
  },
  methods: {
    changeProgress(val){ this.currentPage = val },
    updatePageInfo(val){
      this.steps[2].heading = val.title
      this.steps[2].text = val.text
      this.steps[2].image = val.img  
    },
  }
};
</script>

<style lang="scss">
@import './stylesheets/global';
</style>
