<template>
  <div class="mdl-layout__drawer" ref="drawer" >
    <span class="mdl-layout-title">Title</span>
    <nav class="mdl-navigation ">
      <a
      v-for="link in links"
      :key="link.name"
      @click="go(link.componentName)"
      class="mdl-navigation__link">{{link.name}}</a>
    </nav>
  </div>
</template>
<script>
  export default {
    methods: {
      go(component){
        this.$router.push({name : component});
        this.$refs.drawer.setAttribute('aria-hidden', true);
        this.$refs.drawer.classList.remove('is-visible');
        document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible');

      }
    },
    data: () => ({
      showDrawer: false,
    }),
    computed: {
      links() {
        return [
      {
        name: 'Home',
        componentName: 'home'
      },
      {
        name: 'Projects',
        componentName: 'api'
      },
      {
        name: 'Add project',
        componentName: 'form',
      },
      {
        name: 'FAQ',
        componentName: 'ComponentName'
      },
      ]
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