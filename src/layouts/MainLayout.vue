<template>
  <div class="app-main-layout">
    <Navbar @navbarClick="this.navbarClick" />

    <Sidebar :isOpen="isOpen" />

    <main class="app-content" :class="{ full: !this.isOpen }">
      <div class="app-page"><router-view /></div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/app/Navbar.vue";
import Sidebar from "../components/app/Sidebar.vue";

export default {
  name: "main-layout",
  components: { Sidebar, Navbar },
  methods: {
    navbarClick() {
      this.isOpen = !this.isOpen;
    },
  },
  data() {
    return {
      isOpen: true,
    };
  },
};
</script>
