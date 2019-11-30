<template>
  <div>
    <h1 @click="$store.commit('addCount', 10)">Hello</h1>
    <h3>{{$store.getters.getCount}}</h3>
  </div>
</template>
<script>
  export default {
    name: 'Home'
  }
</script>
<style>
  
</style>