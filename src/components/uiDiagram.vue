<template>
  <Diagram
    :width="1000"
    :height="500"
    :fluid="true"
    scale=1
    background="#efefef"
    :links="links"
    :nodes="nodes"
    :editable="false"
  />
</template>
<script>
  import Diagram from 'diagram-vue';
  import "diagram-vue/dist/diagram.css";
  export default{
    components:{
      Diagram 
    },
    data:() => ({
      startingPoint: 5,
      nodes: [{id: '1', content:{text:'API 1', url: '/api1', color: '#fab1a0'}, width: 100, height: 50, shape: 'rectangle', point: {x: 5, y: 5}}, {id: '2', content:{text:'API 2', url: '/api2', color: 'white'}, width: 100, height: 50, shape: 'rectangle', point: {x: 5, y: 155}}, {id: '3', content:{text:'API 3', url: '/api3', color: 'white'}, width: 100, height: 50, shape: 'rectangle', point: {x: 255, y: 5}}],
      links: [{id:'0', source: '1', destination: '2', point: {x: 55, y: 55}, color: '#74b9ff', pattern: 'solid', arroy: 'dest'}, {id:'1', source: '1', destination: '3', point: {x: 55, y: 55}, color: '#74b9ff', pattern: 'solid', arroy: 'dest'}]
    })
  }
</script>