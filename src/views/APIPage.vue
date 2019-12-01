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
        <p class="state"><span class="title">State: </span> <span :class="['card', {'green': API.state === 'up'}, {'red': API.state === 'down'}]">{{API.state}} </span></p>
        
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
  .block .state {
    text-align: left;
    font-size: 24px;
  }
  .title {
    font-weight: bold;
  }
  .card {
    padding: 2px 15px;
    border-radius: 5px;
  }
  .green {
    background-color: #62f071;
  }
  .red {
    background-color: #e23737;
  }
</style>