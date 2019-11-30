<template>
  <div>
    <h2 @click="isOpened=!isOpened">Group 1</h2>
    <ul :class="{closed: isOpened}">
      <li><Card>API 1</Card></li>
      <li><Card>API 2</Card></li>
      <li><Card>API 3</Card></li>
      <li><Card>API 4</Card></li>
    </ul>
  </div>
</template>
<style scoped>
  h2{
    cursor: pointer;
  }
  ul li{
    display: flex;
    flex-flow: column nowrap;
  }
  .closed{
    display: none;
  }
</style>
<script>
  import Card from './uiAPICard';
  export default{
    data: () =>({
      isOpened: false,
    }),
    components:{
      Card
    }
  }
</script>