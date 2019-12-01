<template>
  <div @click="loadAPI()" class="demo-card-wide mdl-card mdl-shadow--2dp">
  <div class="mdl-card__title">
    <h2 class="mdl-card__title-text">{{ name }}</h2>
  </div>
</div>
</template>
<script>
  export default {
    props: ['name', 'id'],
    methods: {
      loadAPI() {
        this.$store.dispatch('loadAPI', this.id)
      }
    }
  }
</script>
<style scoped>
  .demo-card-wide.mdl-card {
    width: 100%;
    min-height: 50px;
    background-color: #bdbdbd;
    margin: 10px 0;
    box-shadow: 0 1px 1px rgba(0,0,0, .1);
    cursor: pointer;
  }
  .demo-card-wide > .mdl-card__title {
    color: #000;
    padding: 10px;
  }
</style>