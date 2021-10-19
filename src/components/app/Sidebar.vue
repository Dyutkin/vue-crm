<template>
  <ul class="sidenav app-sidenav" :class="{ open: this.isOpen }">
    <router-link
      v-for="(linkitem, index) in links"
      :key="index"
      tag="li"
      active-class="active"
      :to="linkitem.url"
      :exact="linkitem.exact"
    >
      <a href="linkitem.url" class="waves-effect waves-orange pointer">{{
        linkitem.title
      }}</a>
    </router-link>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "Счет", url: "/", exact: true },
        { title: "История", url: "/history", exact: false },
        { title: "Планирование", url: "/planning", exact: false },
        { title: "Новая запись", url: "/record", exact: false },
        { title: "Категории", url: "/categories", exact: false },
      ],
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
