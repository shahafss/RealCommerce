<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <v-btn @click="value = null">Clear</v-btn>
      <v-btn @click="refresh()">Refresh</v-btn>
      <v-row align="center">
        <v-col cols="12">
          <v-autocomplete
            v-model="value"
            :items="items"
            dense
            filled
            placeholder="Search"
          >
          </v-autocomplete>
        </v-col>
      </v-row>
    </v-app-bar>

    <v-main>
      <MainPage ref="mainPage" @response="resItems = $event"></MainPage>
    </v-main>
  </v-app>
</template>

<script>
import MainPage from "./components/MainPage";

export default {
  name: "App",

  data() {
    return {
      resItems: [],
      value: null,
    };
  },
  computed: {
    items() {
      return this.resItems.map((item) => {
        return `${item.Title} - ${item.Year.substring(0, 4)}`;
      });
    },
  },
  methods: {
    log(data) {
      console.log("data>>", data);
    },
    refresh() {
      this.$refs.mainPage.getResItems();
    },
  },

  components: {
    MainPage,
  },
};
</script>
