<template>
  <div>
    <h1>API Page</h1>
    <div>
      <p>Responsible: D.V.Lutkova</p>
      <div class="block">
        <h2>Request</h2>
        <CodeViewer :JSONValue="{value: 'Hello'}" />
      </div>
      <div class="block">
        <h2>Response</h2>
        <CodeViewer :JSONValue="{value: 'Hello', data: {name: 'Hello', key: 65}}" />
      </div>
      <div class="block">
        <h2>Visualisation</h2>
        <Diagram />
      </div>
    </div>
  </div>
</template>
<script>
  import Diagram from '../components/uiDiagram.vue';
  import CodeViewer from '../components/uiCodeViewer.vue';
  export default{
    components: {
      Diagram, CodeViewer
    }
  }
</script>
<style scoped>
  .block{
    margin: 20px 0;
  }
</style>