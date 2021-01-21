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

      <v-btn rounded color="blue" @click="value = null">Clear</v-btn>
      <v-btn rounded color="blue" @click="refresh()">Refresh</v-btn>

      <v-row align="center">
        <v-col cols="12">
          <v-autocomplete
            v-model="value"
            :items="items"
            color="white"
            placeholder="Start typing to Search"
            prepend-icon="mdi-magnify"
            hide-details
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
  data() {
    return {
      value: null,
    };
  },
  methods: {
    refresh() {
      this.$store.dispatch("fetchItems");
    },
  },
};
</script>

<style lang="scss" scoped>
.v-btn {
  margin: 5px;
}
</style>
