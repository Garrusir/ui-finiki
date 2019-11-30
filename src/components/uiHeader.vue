<template>
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <!-- Title -->
      <!-- Add spacer, to align navigation to the right -->
      <div class="mdl-layout-spacer"></div>
      <!-- Navigation. We hide it in small screens. -->
      <nav class="mdl-navigation mdl-layout--large-screen-only">
        <a
        v-for="link in links"
        :key="link.name"
        @click="goToRoute(link.component)"
        class="mdl-navigation__link">{{link.name}}</a>
      </nav>
        </div>
  </header>
</template>
<script>
  export default {
    computed: {
      links() {
        return [
      {
        name: 'Link1',
        component: 'ComponentName'
      },
      {
        name: 'Link2',
        component: 'ComponentName'
      },
      {
        name: 'Link3',
        component: 'ComponentName'
      }]
      }
    },
    methods: {
      goToRoute(route) {
        console.log('going to ...', route)
      }
    }
  }
</script>