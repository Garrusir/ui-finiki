<template>
  <div class="api-main">
    <div class="api-main_list">
      <h1>List of APIs</h1>
      <div>
        <APIGroup
        v-for="group in APIGroups"
        :key="group.id"
        :title="group.name"
        />
      </div>
    </div>
    <div class="api-main_card">
      <APIPage />
    </div>

</div>
</template>
<script>
  import APIGroup from '../components/uiAPIGroup.vue';
  import APIPage from './APIPage';

  export default{
    created(){
      this.$store.dispatch('getProjects')
        .then(res => {
          console.log("Загруженно");
        })
    },
    computed: {
      APIGroups(){
        // return this.$store.getters.getGroups;
        return [{
          id: 1,
          name: 'project 1',
        },
        {
          id: 2,
          name: 'project 2',
        }]
      }
    },
    data: () => ({
      activePage: '',
    }),
    components:{
      APIGroup,
      APIPage
    }
  }
</script>
<style>
  .api-main {
    display: flex;
    flex-grow: 1;
    flex-flow: row nowrap;
  }
  .api-main_list {
    flex-grow: 1;
  }
  .api-main_card {
    width: 400px;
    margin-left: 16px;
    overflow-y: scroll;
  }

</style>