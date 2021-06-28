<template>
    <form action="" method="POST">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input
          @keydown="checkValid"
          class="form-control" 
          type="text" 
          name="firstname" 
          id="firstname" 
          pattern="/^[A-Z ,.'-]+$/i"
          minlength="2"
          v-model="firstname"
          required>          
      </div>
      <div class="form-group">
        <label for="surname">Apelido</label>
        <input
          @keydown="checkValid" 
          class="form-control" 
          type="text" 
          name="surname" 
          id="surname" 
          pattern="/^[A-Z ,.'-]+$/i"
          minlength="2"
          v-model="lastname"
          required>          
      </div>
    </form>  
</template>

<script>
export default {
  name: "NameInput",
  data(){
    return {
      firstname: '',
      lastname: '',
      errorArr: []
    }
  },
  methods: {
    checkValid(){
      let nameRegex = /^[A-Z ,.'-]+$/i
      const a = nameRegex.test(this.firstname)
      const b = nameRegex.test(this.firstname)
      this.errorArr=[]

      if(!this.firstname || !this.lastname){
        this.errorArr.push('All slots are required.')
        }

      if(this.firstname.length<3 || this.lastname.length<3){
        this.errorArr.push('Name too short.')
      }else if(!a || !b){this.errorArr.push('Contain invalid characters')}
      
      if(this.errorArr.length){
        this.$emit('validate', false, this.errorArr)
        return
        }
      this.$emit('validate',true, this.errorArr)
      return      
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