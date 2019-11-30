<template>
  <div class="login-form">
    <div class="mdl-layout mdl-js-layout mdl-color--grey-100">
  <main class="mdl-layout__content">
    <div class="mdl-card mdl-shadow--6dp">
      <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
        <h2 class="mdl-card__title-text">Авторизация</h2>
      </div>
      <div class="mdl-card__supporting-text">
        <form @submit.prevent="login()">
          <div class="mdl-textfield mdl-js-textfield" >
            <input v-show="false" type="submit" >
            <input v-model="username" class="mdl-textfield__input" type="email" id="username" />
            <label class="mdl-textfield__label" for="username">Email</label>
          </div>
        </form>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <button @click="login()" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" >Войти</button>
        <button @click="login()" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" >Зарегестрироваться</button>
      </div>
    </div>
  </main>
</div>
  </div>

</template>
<script>
  export default {
    data: () => ({
      username: '',
    }),
    methods: {
      login(){
        console.log(this.username);
      }
    }
  }
</script>
<style scoped>
  .login-form {
    flex-grow: 1;
  }
  .mdl-layout {
  align-items: center;
  justify-content: center;
}
  .mdl-layout__content {
  padding: 24px;
  flex: none;
}
/*  .mdl-button {
    width: 100%;
  }*/
</style>