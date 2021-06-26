<template>
    <form action="POST">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input class="form-control" type="text" name="firstname" id="firstname" required>          
      </div>
      <div class="form-group">
        <label for="surname">Apelido</label>
        <input class="form-control" type="text" name="surname" id="surname" required>          
      </div>
    </form>  
</template>

<script>
export default { name: "UserAuth" };
</script>

<style scoped lang="scss">
@import '../../stylesheets/global';
form {
  margin:0 auto;
  padding-top: 1vh;
  width:500px;
  .form-group {
    text-align: left;
    margin: 1vh 0;
  }
}
</style>