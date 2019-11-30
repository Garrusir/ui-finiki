<template>
  <div class="main__main">
    <ui-header/>
    <ui-sidebar/>
    <router-view />
  </div>
</template>
<script>
  import uiHeader from './components/uiHeader'
  import uiSidebar from './components/uiSidebar'

  export default {
    components: {
      uiHeader,
      uiSidebar
    }
  }
</script>
<style>
  .main__main {
    background-color: red;
    flex-grow: 1;
  }
</style>