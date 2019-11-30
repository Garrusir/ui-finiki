<template>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Title</span>
    <nav class="mdl-navigation ">
      <a
      v-for="link in links"
      :key="link.name"
      class="mdl-navigation__link">{{link.name}}</a>
    </nav>
  </div>
</template>
<script>
  export default {
    computed: {
      links() {
        return [
      {
        name: 'Nav Link1',
        component: 'ComponentName'
      },
      {
        name: 'Nav Link2',
        component: 'ComponentName'
      },
      {
        name: 'Nav Link3',
        component: 'ComponentName'
      }]
      }
    }
  }
</script>
<style>

  .mdl-layout__drawer .mdl-navigation .mdl-navigation__link:hover {
    background-color: #bbdefb;
    color: #000 !important;
    cursor: pointer;
  }
</style>