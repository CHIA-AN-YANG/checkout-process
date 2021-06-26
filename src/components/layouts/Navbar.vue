<template>
  <nav class="nav__card">
    <ul class="nav__lists row justify-content-end">
      <li class="nav__list nav__list--ayuda">
        <img src="@/assets/navbar-icons/help-icon.svg" alt="help-icon-img">
        <a href="#">AYUDA</a>        
      </li>

      <li class="nav__list nav__list--signin d">
        <img src="@/assets/navbar-icons/user-auth.svg" alt="user-auth-img">
        <a href="#">SIGN IN</a>
      </li>

      <li class="nav__list nav__list--es">
        <a href="#">ES</a>
        <img src="@/assets/navbar-icons/arrow-down.svg" alt="arrow-down-img">
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
};
</script>
<style scoped lang="scss">
.nav {
  &__lists{
    height: 50px;
    margin-bottom: 0;
  }
  &__list {
    flex-flow: row nowrap;
    flex: 0 1 150px;
    width: 150px;
    cursor: pointer;
    >a {
      display: inline-block;
      line-height: 40px;
      padding: 5px 1rem;
      color: inherit;
    }    
  }  
}
</style>