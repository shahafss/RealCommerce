<template>
  <div>
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
        <v-card-title>RealCommerce</v-card-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="value = null">Clear</v-btn>
      <v-btn @click="refresh()">Refresh</v-btn>

      <v-row align="center">
        <v-col cols="12">
          <v-autocomplete
            v-model="value"
            :items="items"
            :search-input.sync="search"
            color="white"
            placeholder="Start typing to Search"
            prepend-icon="mdi-database-search"
            item-text="Title"
          >
            <template v-slot:item="data">
              <router-link
                tag="div"
                style="width:100%;"
                class="routerlink"
                :to="'/item/' + data.item.imdbID"
              >
                <v-list-item>
                  <v-list-item-title>
                    {{ data.item.Title }}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ data.item.Year }}
                  </v-list-item-subtitle>
                </v-list-item>
              </router-link>
            </template>
          </v-autocomplete>
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: { items: Array },
  methods: {
    customFilter() {
      return ["Title", "Year"];
    },
    log(data) {
      console.log("data>>", data);
    },
    refresh() {
      console.log("items>>", this.items);
      // this.$refs.mainPage.getResItems();
    },
  },
};
</script>

<style lang="scss" scoped></style>
