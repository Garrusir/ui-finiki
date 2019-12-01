<template>
  <div id ="mycard">
    <div class="demo-card-wide mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Project details</h2>
      </div>
      <div class="mdl-card__supporting-text">
        <form action="#">
          <div id="name">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="first">
              <label class="mdl-textfield__label" for="sample3">Project Name</label>
            </div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="last">
              <label class="mdl-textfield__label" for="sample3">Description</label>
            </div>
            <div id="select">
              <div class="mdl-textfield mdl-js-textfield getmdl-select">
                <input type="text" v-model:value="state" class="mdl-textfield__input" id="sample2" placeholder="State" readonly>
                <i class="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
                <!-- <label for="sample2" class="mdl-textfield__label">State</label> -->
                <ul id="dropdown" for="sample2" class="mdl-menu mdl-menu--bottom-left mdl-js-menu">
                    <li class="mdl-menu__item" @click="state='Up and running'">Up and running</li>
                    <li class="mdl-menu__item" @click="state='In development'">In development</li>
                    <li class="mdl-menu__item" @click="state='In deployment'">In deployment</li>
                    <li class="mdl-menu__item" @click="state='Disabled'">Disabled</li>
                </ul>
              </div>
          </div>
          </div>
          <div id ="contact">
          <div id="phone">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)" id="mobile">
              <label class="mdl-textfield__label" for="sample2">URL (develop, preprod, prod)</label>
              <span class="mdl-textfield__error">URL must be in a correct form!</span>
            </div>
          </div>
          <div id="curators">
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="first">
              <label class="mdl-textfield__label" for="sample3">Curators of the project</label>
            </div>
          </div>
        </div>
        <div id="next">
        <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect">
          <i class="material-icons">arrow_forward</i>
        </button>
      </div>
    </form>
  </div>
</div>
</div>
</template>
<script>
  export default{
    data:() => ({
      state: '',
    })
  }
</script>
<style scoped>
  .mdl-card{
    width: 500px;
    margin: 0 auto;
    height: 80vh;
  }
  .mdl-icon-toggle__label{
    float: right;
    margin-top: -30px;
  }
  #dropdown{
    width: 300px;
  }
</style>