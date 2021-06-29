<template>
<main class="checkout bg--lightgray main__wrapper">
    <Steps :steps="steps" :pageId="stepA.id"/>
  <!-- start error message -->
  <div class="msg__card alert alert-danger alert-dismissible" role="alert" v-show="errorMsg.length">
      <span v-for="error in errorMsg" :key="error">{{"* "+error+" "}}</span>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="closeErrorAlert">
      <span aria-hidden="true">&times;</span>
    </button>      
  </div> 
  <!-- end error message -->  
<div class="main__card ">
  <div class="main__card--innerspace">
<!-- start main content -->
  <!-- use this when building back-end, then redirects to next page: -->
  <!-- <form id="name-form" action="checkout/name" method="POST"> -->
    <form id="name-form">
      <h2 v-text="stepA.heading"></h2>
      <p v-text="stepA.text"></p>
      <div class="form-group">
        <label for="name">Nombre</label>
        <input
          @keydown="checkValid"
          class="form-control" 
          type="text" 
          name="firstname" 
          id="firstname" 
          pattern="/^[A-Z ,'-]+$/i"
          minlength="2"
          v-model="firstname"
          required>          
      </div>
      <div class="form-group">
        <label for="lastname">Apelido</label>
        <input
          @keydown="checkValid" 
          class="form-control" 
          type="text" 
          name="lastname" 
          id="lastname" 
          pattern="/^[A-Z ,'-]+$/i"
          minlength="2"
          v-model="lastname"
          required>          
      </div>
    </form>  
    <!-- end main content -->
    <PageBtns :nextPage="nextPageA" :pageId="stepA.id" 
              :valid="valid" formName="name-form"/>
  </div>  
</div>
</main>
</template>

<script>
import Steps from "@/components/pageElements/Steps.vue"
import PageBtns from "@/components/pageElements/PageBtns.vue"
export default {
  name: "NameInput",
  props:{
    steps: Array,
    stepA: Object,
    nextPageA: String 
  },
  components: {
    Steps,
    PageBtns
  },
  data(){
    return {
      pageId: this.stepA.id,
      firstname: '',
      lastname: '',
      errorArr: [],
      errorMsg: [],
      valid: false
    }
  },
  methods: {
    checkValid(){
      let nameRegex = /^[A-Z ,'-]+$/i
      const nameCheckA = nameRegex.test(this.firstname)
      const nameCheckB = nameRegex.test(this.firstname)
      this.errorMsg=[]

      if(!this.firstname || !this.lastname){
        this.errorMsg.push('All slots are required with valid characters only.')
        }

      if(this.firstname.length<3 || this.lastname.length<3){
        this.errorArr.push('Name too short.')
      }else if(!nameCheckA || !nameCheckB){this.errorMsg.push('Contain invalid characters.')}
      
      if(this.errorMsg.length){
        this.valid=false
        return
        }
      this.valid=true
      return
    },
    closeErrorAlert(){ this.errorMsg=[] }
  }
};
</script>

<style scoped lang='scss'>
@import '../stylesheets/global';
.msg__card {
  position: absolute;
  top: 10vh;
  left: 50%;
  width: 600px;
  transform: translateX(-50%);
  text-align: left;
  opacity: .9;
};
form {
  margin: 9vh auto 0;
  padding-top: 1vh;
  width:500px;
  .form-group {
    text-align: left;
    margin: 1vh 0;
  }
  input {
    text-transform: capitalize;
  }
}
</style>