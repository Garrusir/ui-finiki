<template>
  <div class="main__main">
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <ui-header/>
    <ui-sidebar/>
      <main class="mdl-layout__content">
        <div class="page-content">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>
<script>
  import uiHeader from '../components/uiHeader'
  import uiSidebar from '../components/uiSidebar'

  export default {
    components: {
      uiHeader,
      uiSidebar
    }
  }
</script>
<style>
  .main__main {
    flex-grow: 1;
    display: flex;
  }
  .page-content {
    padding: 0 16px;
    margin-top: 16px;
    /*width: 960px;*/
    margin: 0 auto;
  }
</style>