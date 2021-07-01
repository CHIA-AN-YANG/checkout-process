<template>
<main class="checkout bg--lightgray main__wrapper">

  <Steps :steps="steps" :pageId="stepA.id"/>

  <!-- start error message -->
  <div class="msg__card alert alert-danger alert-dismissible" role="alert" v-show="errorMsg.length">
      <li class="msg__li" v-for="error in errorMsg" :key="error">{{error+" "}}</li>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="closeErrorAlert">
      <span aria-hidden="true">&times;</span>
    </button>      
  </div> 
  <!-- end error message -->  

  <div class="main__card ">
    <div class="main__card--innerspace">
    <!-- start main content -->    
    <!-- use this when building req, res: <form id="name-form" method="post" action=""> -->
      <form>
        <h2 v-text="stepA.heading"></h2>
        <p v-text="stepA.text"></p>
        <div class="form-group">
          <label for="name">{{$store.state.usedtxt.firstname}}</label>
          <input
            @keydown="checkValid"
            class="form-control" 
            type="text" 
            name="firstname" 
            id="firstname" 
            pattern="^[A-Z,a-z,'-]+$"
            minlength="2"
            v-model="firstname"
            required>          
        </div>
        <div class="form-group">
          <label for="lastname">{{$store.state.usedtxt.lastname}}</label>
          <input
            @keydown="checkValid" 
            class="form-control" 
            type="text" 
            name="lastname" 
            id="lastname" 
            pattern="^[A-Z,a-z,'-]+$"
            minlength="2"
            v-model="lastname"
            required>          
        </div>
      </form>  
      <!-- end main content -->
    <PageBtns :nextPage="nextPageA" :pageId="stepA.id" @sendRequest="sendRequest"
              :proceedText="transContinue" :valid="valid" />
  </div>  
</div>
</main>
</template>

<script>
import axios from 'axios'
import Steps from "@/components/pageElements/Steps.vue"
import PageBtns from "@/components/pageElements/PageBtns.vue"
export default {
  name: "NameInput",
  props:{
    steps: Array,
    stepA: Object,
    nextPageA: String 
  },
  components: { Steps, PageBtns },
  data(){
    return {
      pageId: this.stepA.id,
      firstname: '',
      lastname: '',
      errorMsg: [],
      valid: false,
      proceedText: 'Pay'
    }
  },
  computed: {
    transContinue(){return this.$store.state.usedtxt.continue}
  },
  methods: {
    sendRequest(){
      axios.post("https://run.mocky.io/v3/5fd5b0a0-7cec-4ccf-bdec-b9c99c78e29f", {
        firstname: this.firstname,
        lastname: this.lastname })
        .then(res => { 
          const nameObj = {
            firstname: this.firstname,
            lastname: this.lastname 
            }
          const locale = this.$store.state.lang          
          localStorage.setItem('title', res.data.title[locale] )
          localStorage.setItem('text', res.data.message[locale] )
          localStorage.setItem('img', res.data.img )  
          this.$store.commit('storeName', nameObj)                //save name to vuex store  
        })
        .then(() => this.$router.push({name:'CardProceed'}))
        .catch(error => {
          console.error(this.$store.state.usedtxt.authFail, error)
          alert(this.$store.state.usedtxt.authFail) })
        .finally(() => this.loading = false)    
    },
    checkValid(){
      let nameRegex = /^[A-Z,'-]+$/i
      const nameCheckA = nameRegex.test(this.firstname)
      const nameCheckB = nameRegex.test(this.lastname)
      this.errorMsg=[]

      if(!this.firstname || !this.lastname){
        this.errorMsg.push(this.$store.state.usedtxt.errorBlank)
        }

      if(this.firstname.trim().length<2 || this.lastname.trim().length<2){
        this.errorMsg.push(this.$store.state.usedtxt.errorShort)
      }else if(!nameCheckA || !nameCheckB){this.errorMsg.push(this.$store.state.usedtxt.errorCharacter)}
      
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
  z-index: 50;
};
@media (max-width: $breakpoint-phone) {
  .msg__card { width: 90vw;}
};
@media (min-width: $breakpoint-phone) and (max-width: $breakpoint-tablet) 
{
  .msg__card { width: 90vw;}
}
.msg__li{ list-style-type: disc;}
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
@media (max-width: $breakpoint-phone) {
  form {
    margin: 5vh auto 0;
    width:100%;
    padding: .6em;
    .form-group {
      margin: 1em 0;
    }
  }
}
@media (min-width: $breakpoint-phone) and (max-width: $breakpoint-tablet) 
{
  form {
    margin: 5vh auto 0;
    width:100%;
    padding: 1em;
    .form-group {
      margin: 1em 0;
    }
  }
}
</style>