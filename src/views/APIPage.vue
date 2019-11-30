<template>
  <div>
    <h1>API Page</h1>
    <div>
      <p>Responsible: D.V.Lutkova</p>
      <div>
        <h2>Request</h2>
      </div>
      <div>
      <h2>Response</h2>
      </div>
      <div>
        <h2>Visualisation</h2>
        <Diagram />
      </div>
    </div>
  </div>
</template>
<script>
  import Diagram from '../components/uiDiagram.vue';
  export default{
    components: {
      Diagram
    }
  }
</script>