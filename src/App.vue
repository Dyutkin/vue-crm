<template>
  <component :is="layout">
    <div id="app"><router-view /></div>
  </component>
</template>

<script>
import EmptyLayout from "./layouts/EmptyLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";

export default {
  computed: {
    layout() {
      console.log(this.$route.meta, !this.$route.meta?.layout);
      if (this.$route.meta.layout === "empty") {
        return EmptyLayout;
      }
      return MainLayout;
    },
  },
  components: {
    EmptyLayout,
    MainLayout,
  },
};
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.css";
@import "assets/index.css";
</style>
