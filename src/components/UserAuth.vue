<template>
    <form action="POST">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input class="form-control" type="text" name="firstname" id="firstname">          
      </div>
      <div class="form-group">
        <label for="surname">Apelido</label>
        <input class="form-control" type="text" name="surname" id="surname">          
      </div>
    </form>  
</template>

<script>
export default { name: "UserAuth" };
</script>

<style scoped lang="scss">
</style>