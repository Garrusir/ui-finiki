<template>
  <div>
    <h1>Hello</h1>
    <h3>{{$store.getters.getCount}}</h3>
    <button @click="$store.commit('addCount', 10)" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
      Add
    </button>
  </div>
</template>
<script>
  export default {
    name: 'Home'
  }
</script>
<style>
  
</style>