<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{
            invalid:
              (this.$v.email.$dirty && !this.$v.email.required) ||
              (this.$v.email.$dirty && !this.$v.email.email),
          }"
        />
        <label for="email">Email</label>
        <small
          v-if="this.$v.email.$dirty && !this.$v.email.required"
          class="helper-text invalid"
          >введите Email</small
        >
        <small
          v-if="this.$v.email.$dirty && !this.$v.email.email"
          class="helper-text invalid"
          >Email введен в некорректном формате</small
        >
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model="password"
          :class="{
            invalid:
              (this.$v.password.$dirty && !this.$v.password.required) ||
              (this.$v.password.$dirty && !this.$v.password.email),
          }"
        />
        <label for="password">Пароль</label>
        <small
          v-if="this.$v.password.$dirty && !this.$v.password.required"
          class="helper-text invalid"
          >введите Password</small
        >
        <small
          v-if="this.$v.password.$dirty && !this.$v.password.minLength"
          class="helper-text invalid"
          >Password необходимо ввести более
          {{ this.$v.password.$params.minLength.min }} символов. Введено
          {{ password.length }}</small
        >
      </div>
      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="{ invalid: this.$v.name.$dirty && !this.$v.name.required }"
        />
        <label for="name">Имя</label>
        <small
          v-if="this.$v.name.$dirty && !this.$v.name.required"
          class="helper-text invalid"
          >Введите имя</small
        >
      </div>
      <p>
        <label>
          <input
            type="checkbox"
            v-model="agree"
            :class="{
              invalid: this.$v.agree.$dirty && !this.$v.agree.required,
            }"
          />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти! </router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, minLength, required } from "vuelidate/lib/validators";

export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      name: "",
      agree: false,
    };
  },
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(4) },
    name: { required },
    agree: { checked: (v) => v },
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
      };
      console.log("formData", formData);
      this.$router.push("/");
    },
  },
};
</script>
