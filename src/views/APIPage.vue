<template>
  <div>
    <h1>API Details</h1>
    <div v-if="API">
      <p>Responsible: D.V.Lutkova</p>
      <div class="block">
        <h2>Request</h2>
        <CodeViewer :JSONValue="API.request" />
      </div>
      <div class="block">
        <h2>Response</h2>
        <CodeViewer :JSONValue="API.response" />
      </div>
      <div class="block">
        <h2>Visualisation</h2>
        <Diagram />
      </div>
    </div>
    <div v-else>
      <p>Нет выбранных сервисов</p>
    </div>
  </div>
</template>
<script>
  import Diagram from '../components/uiDiagram.vue';
  import CodeViewer from '../components/uiCodeViewer.vue';
  export default{
    components: {
      Diagram, CodeViewer
    },
    computed: {
      API() {
        // console.log(this.$store.getters.getSelectedAPI)
        // return {
        //   request: {value: 'Hello'},
        //   response: {value: 'Hello', data: {name: 'Hello', key: 65}},
        //   status: 'done'
        // }
        return this.$store.getters.getSelectedAPI
      }
    }
  }
</script>
<style scoped>
  .block{
    margin: 20px 0;
  }
</style>