<template>
  <div class="codeBlock">
    <vue-json-pretty
      :path="'res'"
      :data="JSONValue"
      :showLine="true"
      :showDoubleQuotes="true"
      :highlightMouseoverNode="true"
      :deep="3">
    </vue-json-pretty>
  </div>
</template>
<script>
  import VueJsonPretty from 'vue-json-pretty'
  export default{
    components:{
      VueJsonPretty
    }, 
    props:['JSONValue']
  }
</script>
<style scoped>
  .vjs-tree.is-root{
    text-align: left;
  }
  .codeBlock{
    background-color: #f9f9f9;
    padding: 20px;
    margin: 20px 0;
  }
</style>