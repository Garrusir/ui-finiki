<template>
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <!-- Title -->
      <!-- Add spacer, to align navigation to the right -->
      <div class="mdl-layout-spacer"></div>
      <!-- Navigation. We hide it in small screens. -->
      <nav class="mdl-navigation mdl-layout--large-screen-only">
          <i @click="isOpened=!isOpened" class="mdl-icon-toggle__label material-icons">account_circle</i>
          <div :class="['dropdown', {closed: !isOpened}]">
            <p @click="logout()">Exit</p>
          </div>
      </nav>
        </div>
  </header>
</template>
<script>
  export default {
    methods: {
      goToRoute(route) {
        // console.log('going to ...', route)
        this.$store.dispatch('getProjects', )
      },
      logout(){
        this.$store.commit('logout');
        this.$router.push({name: 'login'})
      }
    },
    data:() => ({
      isOpened: false
    })
  }
</script>
<style scoped>
  .mdl-icon-toggle__label{
    color: white;
    font-size: 40px;
  }
  .closed{
    display: none;
  }
  .dropdown{
    position: absolute;
    top: 50px;
    right: 5px;
    margin: 0;
    padding: 10px 0;
    background-color: #efefef;
    color: #2c3e50;
    border-radius: 2px;
  }
  .dropdown p{
    cursor: pointer;
    padding: 0 35px;
    margin: 0;
  }
  .dropdown p:hover{
    background-color: #90a4ae;
  }
</style>