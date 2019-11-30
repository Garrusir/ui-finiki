<template>
  <div class="mdl-layout__drawer mdl-color--blue-800">
    <span class="mdl-layout-title mdl-color-text--blue-50">Title</span>
    <nav class="mdl-navigation ">
      <a
      v-for="link in links"
      :key="link.name"
      class="mdl-navigation__link mdl-color-text--blue-50">{{link.name}}</a>
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