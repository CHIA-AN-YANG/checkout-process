<template>
<div class="wrapper__app">
  <Navbar @renewSteps="renewStep"/>
  <!-- start main page content -->
  <!-- 2nd line: NameInput | 3rd, 4th: Cardproceed | 5th: CheckoutCompleted -->
  <router-view :to="{ name: 'NameInput' }" :steps="steps"
  :stepA="steps[0]" :nextPageA="steps[1].name"          
  :stepB="steps[1]" :nextPageB="steps[2].name" 
  :prevPageB="steps[0].name" 
  :stepC="steps[2]" :prevPageC="steps[1].name"/> 
  <!-- start main page content -->    
</div>
</template>

<script>
import zh_CNsteps from '@/locale/zh_CNsteps.json'
import Navbar from "@/components/layouts/Navbar.vue";
export default {
  name: "App",
  components: { Navbar, },
  data(){
    return { steps: zh_CNsteps } 
  },
  computed: {
    getSteps(){ return this.$store.steps}
  },
  methods: {
    renewStep(val){
      this.steps = val
    }
  }
};
</script>

<style lang="scss">
@import './stylesheets/global';
</style>
