<template>
  <v-app>
    <AppBar :items="items"></AppBar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";

export default {
  name: "App",
  components: {
    AppBar,
  },
  computed: {
    items() {
      return this.$store.getters.getAllItems;
    },
  },
};
</script>
