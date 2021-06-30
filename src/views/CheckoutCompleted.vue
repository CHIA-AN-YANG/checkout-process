<template>
  <main class="checkout bg--lightgray main__wrapper">
    <Steps :steps="steps" :pageId="stepC.id"/>
    <div class="main__card ">
      <div class="main__card--innerspace">
        <!-- start main content -->
        <div id="diploma" class="central-img__holder">
          <img class="central-img" :src="imgsrc">
        </div>
        <h2>{{successInfo.title}}</h2>
        <p>{{successInfo.text}}</p>
        <!-- end main content -->
        <PageBtns :pageId="stepC.id" v-show="false"/>
      </div>  
    </div>
  </main>
</template>

<script>
import Steps from "@/components/pageElements/Steps.vue"
import PageBtns from "@/components/pageElements/PageBtns.vue"
export default { 
  name: "CheckoutCompleted",
  props: { 
    steps: Array,
    stepC: Object
  },
  components: {
    Steps,
    PageBtns,
  },
  data(){
    return {
     pageId: this.stepC.id,
     successInfo: { title: "", text: "", img: "" },
     imgsrc:""
    }
  },
  watch: {
    successInfo: {
      handler(val){ this.imgsrc = require(`@/assets/${val.img}`) },
      deep: true
    }
  },
  created(){
    this.successInfo.title =localStorage.getItem('title')
    this.successInfo.text =localStorage.getItem('text')
    this.successInfo.img =localStorage.getItem('img')
  }}
</script>

<style lang="scss" scoped>
@import '../stylesheets/global';
.central-img__holder {
  margin: 1em;
  margin-top: 18vh;
  border: none;
  box-shadow: none;
}
.central-img {
  height: 80px;
  width: 100px;
  margin: 0 auto;
}
@media (max-width: $breakpoint-phone) {
.central-img__holder {
  margin-top: 15vh;
}
.main__card--innerspace{
  padding-left: 2em;  
  padding-right: 2em;
  padding-bottom: 300px;
}
}
@media (min-width: $breakpoint-phone) and (max-width: $breakpoint-tablet) 
{
.central-img__holder {
  margin-top: 8vh;
}
}
</style>