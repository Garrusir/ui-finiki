<template>
  <div>
    <h1>List of APIs</h1>
    <div>
      <APIGroup />
      <APIGroup />
    </div>
</div>
</template>
<script>
  import APIGroup from '../components/uiAPIGroup.vue';
  export default{
    components:{
      APIGroup
    }
  }
</script>