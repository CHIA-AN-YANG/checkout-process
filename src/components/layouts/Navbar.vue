<template>
  <nav class="nav__card">
    <ul class="nav__lists row">
      <li class="nav__list nav__list--ayuda">
        <img src="@/assets/navbar-icons/help-icon.svg" alt="help-icon-img">
        <a href="#">{{transHelp}}</a>        
      </li>

      <li class="nav__list nav__list--signin">
        <img src="@/assets/navbar-icons/user-auth.svg" alt="user-auth-img">
        <a href="#">{{transSignin}}</a>
      </li>

      <li class="nav__list nav__list--es">
        <div class="nav__dropdown-menu">
          {{currentLang}}
          <img src="@/assets/navbar-icons/arrow-down.svg" alt="arrow-down-img">
          <div class="nav__dropdown-item" @click="switchLang"><span v-text="currentLang==='EN'?'中文':'EN'"></span></div>
        </div>
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
  data(){return {
  }},
  computed:{
    currentLang(){ return this.$store.state.usedtxt.lang },
    transHelp(){ return this.$store.state.usedtxt.help },
    transSignin(){ return this.$store.state.usedtxt.signin }
  },
  methods: {
    switchLang(){
      let chosenLang
      if(this.$store.state.usedtxt.lang==='EN'){ chosenLang='zh_CN'
      }else{ chosenLang='en' }
      this.$store.commit('setLang', chosenLang)
      this.$emit('renewSteps', this.$store.state.steps)
    }
  }
};
</script>
<style scoped lang="scss">
@import '../../stylesheets/base';
@import '../../stylesheets/global';
.nav {
  &__card {
    background-color: $white-c;
  }
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
  &__dropdown-item {
    display: block;
    position: absolute;
    background-color: $white-c;
    opacity: 0;
    border-radius: 0 0 8px 8px;
    top: 50px;
    @include size(40px,70px);
    padding-left: 1em;
    transition: $transition;
    cursor: pointer;
    z-index: 1;
  }
  &__dropdown-menu {
    position: relative;
    display: inline-block;
    line-height: 40px;
    padding: 5px 1rem;
    color: inherit; 
    z-index: 5;
    &:hover .nav__dropdown-item {
      top: 50px;
      opacity: 1;
      pointer-events: auto;
    } 
  }
}  

@media (max-width: $breakpoint-phone) {
.nav {
  &__lists{
    height: 28px;
    padding: 0;
    justify-content: center;
  }
  &__list {
    flex: 0 1 30vw;
    width: 30vw;
    text-align: center;
    &--signin{
    width: 40vw;
    }
    >a {
      line-height: 1em;
      padding: 2px 1rem;
    }
  }
  &__dropdown-item {
    top: 22px;
    font-size: .8em;
    @include size(26px,50px);
    left: 50%;
    transform: translateX(-50%);
    padding-top: 5px;
    padding-left: 0;
    text-align: center;
    >span {
      line-height: 1em;
    }
  }
  &__dropdown-menu {
    font-size: .8em;
    line-height: 1em;
    padding: 2px 1rem;
    &:hover .nav__dropdown-item {
      top: 22px;
      pointer-events: auto;
    } 
  }    
  }  
}

@media (min-width: $breakpoint-phone) and (max-width: $breakpoint-tablet) {
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
      font-size: .8em;
    }
  }   
  &__dropdown-item {
    top: 35px;
    @include size(28px,90px);
    padding-left: .8em;
    font-size: .8em;
  }
  &__dropdown-menu {
    font-size: .8em;
    line-height: 22px;
    padding: 4px 10px;
    &:hover .nav__dropdown-item {
      top: 35px;
      pointer-events: auto;
    }     
  }  
  }
}

@media (min-width: $breakpoint-tablet) and (max-width: $breakpoint-desktop) {
.nav {
  &__lists{
    height: 35px;
    padding: 0;
    justify-content: flex-end;
  }
  &__list {
    flex: 0 1 100px;
    width: 100px; 
    font-size: 1em;
    text-align: left;
    >a {
      line-height: 22px;
      font-size: 1em;
      padding: 4px 10px;
    }
  }   
  &__dropdown-item {
    top: 35px;
    @include size(28px,60px);
    padding-left: 1em;
    font-size: 1em;
  }
  &__dropdown-menu {
    font-size: 1em;
    line-height: 22px;
    padding: 4px 10px;
    &:hover .nav__dropdown-item {
      top: 35px;
      pointer-events: auto;
    }     
  }  
  }
}

</style>