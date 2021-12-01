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
            ...(isMailNotValid
              ? { invalid: true, validate: false }
              : { invalid: false, validate: true }),
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
            ...(isPasswordNotValid
              ? { invalid: true, validate: false }
              : { invalid: false, validate: true }),
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
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, minLength, required } from "vuelidate/lib/validators";
import messages from "@/utils/messages";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(4) },
  },
  mounted() {
    const message = this.$route.query.message;
    if (message && messages[message]) {
      this.$message(messages[message]);
    }
  },
  computed: {
    isMailNotValid() {
      return (
        (this.$v.email.$dirty && !this.$v.email.required) ||
        (this.$v.email.$dirty && !this.$v.email.email)
      );
    },
    isPasswordNotValid() {
      return (
        (this.$v.password.$dirty && !this.$v.password.required) ||
        (this.$v.password.$dirty && !this.$v.password.minLength)
      );
    },
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      this.$router.push("/");
    },
  },
};
</script>
