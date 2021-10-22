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
      <a href="linkitem.url" class="waves-effect waves-orange pointer"
        >{{ linkitem.title }}
      </a>
    </router-link>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "Счет", url: "/", exact: true },
        { title: "История", url: "/history" },
        { title: "Планирование", url: "/planning" },
        { title: "Новая запись", url: "/record" },
        { title: "Категории", url: "/categories" },
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
