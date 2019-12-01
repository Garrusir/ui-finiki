<template>
  <div class="select demo-card-wide mdl-card mdl-shadow--2dp">
    <h3 @click="isOpened=!isOpened">{{ title }}</h3>
    <i :class="['mdl-icon-toggle__label material-icons', {focus: isOpened}]">keyboard_arrow_down</i>
    <ul :class="{closed: !isOpened}">
      <li
      v-for="item in APIList"
      :key="item.id"
      ><Card
      :id="item.id"
      :name="item.name"
      /></li>
    </ul>
  </div>
</template>
<script>
  import Card from './uiAPICard';
  export default{
    props: ['title'],
    data: () =>({
      isOpened: false,
      activeAPI: ''
    }),
    components:{
      Card
    },
    methods: {
    },
    computed: {
      APIList(){
        return [
        {
          id: 1,
          name: 'API 1'
        },
        {
          id: 2,
          name: 'API 2'
        },
        {
          id: 3,
          name: 'API 3'
        },
        {
          id: 4,
          name: 'API 4'
        },
        ]
      }
    }
  }
</script>
<style scoped>
  h3{
    margin: 0;
    cursor: pointer;
    text-align: left;
    padding: 10px 0 10px 15px;
  }
  ul li{
    display: flex;
    flex-flow: column nowrap;
  }
  .closed{
    display: none;
  }
  .mdl-icon-toggle__label {
    color: rgba(0,0,0,0.4);
    transform: rotate(0);
    transition: transform 0.3s;
    position: absolute;
    top: 21px;
    right: 10px;
    font-size: 33px;
}
  .focus{
    color: #3f51b5;
    transform: rotate(180deg);
  }
  .demo-card-wide.mdl-card {
    width: 100%;
    min-height: 60px;
    padding: 5px;
    background-color: #efefef;
    margin: 20px 0;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.1),0 1px 1px -2px rgba(0,0,0,.1),0 1px 3px 0 rgba(0,0,0,.1);
  }
  .demo-card-wide > .mdl-card__title {
    color: #000;
  }
</style>
