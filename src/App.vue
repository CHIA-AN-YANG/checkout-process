<template>
<div class="wrapper--temp">
  <nav class="nav__card">
    <ul class="nav__lists row justify-content-end">
      <li class="nav__list nav__list--ayuda">
        <img src="./assets/navbar-icons/help-icon.svg" alt="help-icon-img">
        <a href="#">AYUDA</a>        
      </li>

      <li class="nav__list nav__list--signin d">
        <img src="./assets/navbar-icons/user-auth.svg" alt="user-auth-img">
        <a href="#">SIGN IN</a>
      </li>

      <li class="nav__list nav__list--es">
        <a href="#">ES</a>
        <img src="./assets/navbar-icons/arrow-down.svg" alt="arrow-down-img">
      </li>
    </ul>
  </nav>

  <main class="checkout bg--lightgray main__wrapper">
      <Steps/>
    <div class="main__card card card-body pt-2 pb-2">
      <UserAuth/>

    </div>    
  </main>

  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</div>
</template>

<script>
import UserAuth from "./components/UserAuth.vue";
import Steps from "./components/Steps.vue";
export default {
  name: "App",
  components: {
    UserAuth,
    Steps
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
//global
h1,h2,p {
  color: $dark-c;
}
a,a:link,a:hover,a:visited,a:active {
  text-decoration:none;
  color: $dark-c;
}
ul,li {
  list-style-type: none;
}
//reusable elements
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
.btn{
  position: relative;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    top: -50px;
    left: -75px;
    @include size(155px, 50px);
    background: #fff;
    opacity: .4;
    transform: rotate(35deg);
    transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
    z-index: 2;
  }
}
.btn:hover {  
  &:after {
    left: 120%;
    transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
  }
}
.step {
  &__row {
    height: 100px;
    padding: 1.5em 0;
    align-items: flex-start;
  }
  &__holder {
    position: relative;
    text-transform: uppercase;
    width: 2.4em;
    overflow: visible;
    text-align: center;
    p {
      display: inline-block;
      position:absolute;
      top: 2.4em;
      left:1.2em;
      font-size: 1em;
      font-weight: 600;
      transform: translateX(-50%);
      text-align: left;
      white-space: nowrap;
    }
  }
  &__ball {
    position: relative;
    @include size(2.4em);
    flex: 0 0 2.4em;
    border-radius: 1em;
    text-align: center;
    display: flex;
    justify-content: center;
    align-self: start;
    perspective: 1000px;
    &.current {
      @include blue-solid-style;
    }
    &.on-hold {
      @include blue-outline-style;
    }
    &.completed {
      &:after {
        content: url("./assets/step-completed.svg");
        position: absolute;
        top: 0px;
        left:0px;
        @include size(2.3em);
        border-radius: 1.15em;
        background-color: $white-c;
        transition: $transition;
        z-index: 10;
      }
      &:before{
        content: '';
        @include ab-center;
        width: 1em; height: 1em;
        border-radius: 100%;
        border: 2px solid $blue-c;
        z-index: 5;
        animation: ring 1s both;
      }
    }
  }
  &__inner {
    font-size: 1em;
    align-self: center;
  }
  &__connection {
    &--holder{
      display: flex;
      flex: 0 1 60px;
      height: 2.4em;
      align-self: start;
      align-items: center;
      margin: 0 .5em;   
    }
    &--line {
      @include size(0,100%);
      flex: 0 0 100%;
      border: 1px solid lightslategray;
      box-sizing: content-box;
      border-radius: 0.5px;   
    }

  }
}


.main {
  &__wrapper {
    @include size(100vh, 100vw);
    background-color: $light-bg-c;
    padding-bottom: 150px;
  }
  &__card {
    max-width: 800px;
    margin: 0 auto;
    padding: 2em auto;
    text-align: center;
    &--innerspace {
      padding: 20px 100px;
    }
    form {
      .form-group {
        text-align: left;
        margin: 1em 0;
      }
      .form--btn-holder {
        display: flex;
        .btn--next {
          @include blue-solid-style;
          margin-top: 1em;
          margin-left: auto;
          >* {
            align-self: center;
          }
          >svg {
            height: 1.6em;
            width: 1.6em;
            margin-left: 0.2em;
          }
        } 
      }   
    }
  }
}
</style>
