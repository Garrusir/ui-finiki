<template>
  <div class="login-form">
    <div class="mdl-layout mdl-js-layout mdl-color--grey-100">
  <main class="mdl-layout__content">
    <div class="mdl-card mdl-shadow--6dp">
      <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
        <h2 class="mdl-card__title-text">Авторизация</h2>
      </div>
      <div class="mdl-card__supporting-text">
      <div>{{!rightEmail ? 'Введите email' : 'Введите код подтверждения'}}</div>
        <form @submit.prevent="login()">
          <div class="mdl-textfield mdl-js-textfield" >
            <input v-show="false" type="submit" >
            <div v-if="!rightEmail">
              <input v-model="value" class="mdl-textfield__input" type="email" id="email" />
              <label class="mdl-textfield__label" for="email">Email</label>
            </div>
            <div v-else>
              <input v-model="value" class="mdl-textfield__input" type="text" id="token" />
              <label class="mdl-textfield__label" for="token">23123123</label>
            </div>
          </div>
        </form>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <button @click="login()" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" >Войти</button>
        <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" >Зарегестрироваться</button>
      </div>
    </div>
  </main>
</div>
  </div>

</template>
<script>
  export default {
    created(){
      console.log(this.$store.getters.getAuth);
    },
    data: () => ({
      value: '',
      rightEmail: false,
    }),
    methods: {
      login(){
        if (!this.rightEmail){
          this.$store.commit('setEmail', this.value);
          this.$store.dispatch('sendEmail')
            .then(()=> {
              this.rightEmail = true;
              this.value = '';
            })
            .catch(error => console.log("Error: ",error));
        } else {
            this.$store.commit('setCode', this.value);
            this.$store.dispatch('sendToken')
              .then(() => {
                console.log(this.$store.getters.getAuth);
              })
        }
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