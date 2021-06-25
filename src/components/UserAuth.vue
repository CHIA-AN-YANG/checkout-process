<template>
  <div class="main__card--innerspace">
    <h2>Mis Datos</h2>
    <p>Reviso los datos y comleta aquelo pendientes antes de continuor con el proceso.</p>
    <form action="POST">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input class="form-control" type="text" name="firstname" id="firstname">          
      </div>
      <div class="form-group">
        <label for="surname">Apelido</label>
        <input class="form-control" type="text" name="surname" id="surname">          
      </div>
      <div class="form--btn-holder justify-content-between">
        <button type="submit" class="btn btn--round btn--next">
          <span>Continuar</span> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" class="bi bi-arrow-right-circle" viewBox="-2 -2 20 20">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
          </svg>
        </button>
      </div>
    </form>        
  </div>
</template>
<script>
export default {
  name: "UserAuth",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>