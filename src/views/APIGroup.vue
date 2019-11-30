<template>
  <div>
    <h1>Group1</h1>
    <p>Description of the group</p>
    <div>
      <Card />
      <Card />
    </div>
  </div>
</template>

<script>
  import Card from '../components/uiAPICard.vue';
  export default{
    components:{
      Card
    }
  }
</script>