<template>
  <div id="main">
    <h1>Microservices</h1>
    <h4>Custom solution for API<br> information monitoring.</h4>
    <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Start now</button>
    <img src="../assets/bg.png">
  </div>
</template>
<script>
  export default {
    name: 'Home'
  }
</script>
<style scoped>
  #main{
    height: 80vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: baseline;
  }

  #main h1{
    padding-top: 100px;
  }
  #main img{
    position: absolute;
    width: 1000px;
    top: 0px;
    right: 20px;
  }
</style>