<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click="$emit('navbarClick')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{ date | date("datetime") }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="/profile"
            data-target="dropdown"
            ref="dropdown"
          >
            USER NAME
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" @click.prevent="logout">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      dateInterval: null,
    };
  },
  methods: {
    logout() {
      this.$router.push("/login?message=logout");
    },
  },
  beforeMount() {
    this.dateInterval = setInterval(() => {
      this.date = new Date();
    }, 1000);
  },
  mounted() {
    window.M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: true,
      coverTrigger: false,
    });
  },
  beforeDestroy() {
    clearInterval(this.dateInterval);
  },
};
</script>
