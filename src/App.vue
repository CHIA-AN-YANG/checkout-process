<template>
<div class="wrapper--temp">
  <nav class="nav__card">
    <ul class="nav__lists row justify-content-end">
      <li class="nav__list nav__list--ayuda">
        <img src="./assets/navbar-icon/help-icon.svg" alt="help-icon-img">
        <a href="#">AYUDA</a>        
      </li>

      <li class="nav__list nav__list--signin d">
        <img src="./assets/navbar-icon/user-auth.svg" alt="user-auth-img">
        <a href="#">SIGN IN</a>
      </li>

      <li class="nav__list nav__list--es">
        <a href="#">ES</a>
        <img src="./assets/navbar-icon/arrow-down.svg" alt="arrow-down-img">
      </li>
    </ul>
  </nav>

  <main class="checkout bg--lightgray main__wrapper">
    <ul class="row step--row">
      <li class="checkout step--on-hold step--at-step step--completed">
        <div class="step--inner">1</div>
      </li>
      <li class="step--connection"></li>
      <li class="checkout step--on-hold step--at-step step--completed">
        <div class="step--inner">2</div>
      </li>
    </ul>
    <div class="main__card">
      <h2>Mis Datos</h2>
      <p>Reviso los datos y comleta aquelo pendientes antes de continuor con el proceso.</p>
      <form action="POST">
        <label for="name">Nombre</label>
        <input type="text" name="firstname" id="firstname">
        <label for="surname">Apelido</label>
        <input type="text" name="surname" id="surname">
        <button class="btn">Continue</button>
      </form>
    </div>    
  </main>

  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
@import './stylesheets/base';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1,h2,p {
  color: $dark-c;
}
a,a:link, a:hover {
  text-decoration:none;
  color: $dark-c;
}
ul,li {
  list-style-type: none;
}
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

.main__wrapper {
  background-color: $light-bg-c;
}
</style>
