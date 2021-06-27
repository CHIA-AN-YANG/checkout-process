<template>
    <form action="" method="POST">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input 
          class="form-control" 
          type="text" 
          name="firstname" 
          id="firstname" 
          pattern="/^[A-Z ,.'-]+$/i"
          v-model="firstname"
          required>          
      </div>
      <div class="form-group">
        <label for="surname">Apelido</label>
        <input 
          class="form-control" 
          type="text" 
          name="surname" 
          id="surname" 
          pattern="/^[A-Z ,.'-]+$/i"
          v-model="lastname"
          required>          
      </div>
    </form>  
</template>

<script>
import store from '@/store'
export default {
  name: "UserAuth",
  data(){
    return {
      firstname: '',
      lastname: '',
      auth:false
    }
  },
  methods: {
    login(){
      if(store.userB.firstname === this.firstname && store.userB.firstname === this.firstname){
        this.auth = true
        this.$router.push(`user/${store.userB.id}/payment`)
        return
        }
    }
  }
};
</script>

<style scoped lang='scss'>
@import '../../stylesheets/global';
form {
  margin:0 auto;
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