<template>
  <nav class="nav__card">
    <ul class="nav__lists row">
      <li class="nav__list nav__list--ayuda">
        <img src="@/assets/navbar-icons/help-icon.svg" alt="help-icon-img">
        <a href="#">AYUDA</a>        
      </li>

      <li class="nav__list nav__list--signin">
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
@import '../../stylesheets/global';
.nav {
  &__lists{
    height: 50px;
    margin-bottom: 0;
    justify-content: flex-end;
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
@media (max-width: $breakpoint-phone) {
.nav {
  &__lists{
    height: 25px;
    padding: 0;
    justify-content: center;
  }
  &__list {
    flex: 0 1 30vw;
    width: 30vw;
    text-align: center;
    &--signin{
    flex: 0 1 40vw;
    width: 40vw;      
    }
    >a {
      line-height: 16px;
      padding: 2px 1rem;
    }    
  }  
}
}
@media (min-width: $breakpoint-phone) and (max-width: $breakpoint-tablet) 
{
.nav {
  &__lists{
    height: 35px;
    padding: 0;
    justify-content: center;
  }
  &__list {
    flex: 0 1 90px;
    width: 90px; 
    text-align: center;
    >a {
      line-height: 22px;
      padding: 4px 10px;
    }    
  }  
}
}
</style>