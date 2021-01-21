<template>
  <v-container fluid>
    <div class="left-panel">
      <v-tabs vertical v-model="tab" class="tabs">
        <v-tab v-for="type in types" :key="type.title">
          {{ type.title }} ({{ type.count }})
        </v-tab>
      </v-tabs>
      <v-btn @click="gridView = !gridView">{{
        `${gridView ? "List View" : "Grid View"}`
      }}</v-btn>
    </div>

    <v-tabs-items v-model="tab">
      <v-tab-item
        class="tab-content"
        :class="{ grid: gridView }"
        v-for="type in types"
        :key="type.title"
      >
        <ResItem
          v-for="(item, index) in getCategory()"
          :key="item.Title + index"
          :item="item"
          @titleChange="updateDB($event)"
        >
          <v-card-title>{{ item.Title }}</v-card-title>
        </ResItem>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import ResItem from "./ResItem";

export default {
  data() {
    return {
      resItems: [],
      tab: null,
      gridView: false,
    };
  },
  created() {
    this.$store.dispatch("fetchItems");
  },
  components: {
    ResItem,
  },
  computed: {
    types() {
      return [
        { title: "Movies", count: this.movies.length },
        { title: "Series", count: this.series.length },
        { title: "Games", count: this.games.length },
      ];
    },
    items() {
      return this.$store.getters.getAllItems;
    },
    movies() {
      return this.items.filter((item) => item.Type == "movie");
    },
    series() {
      return this.items.filter((item) => item.Type == "series");
    },
    games() {
      return this.items.filter((item) => item.Type == "game");
    },
  },

  methods: {
    updateDB(event) {
      this.$store.dispatch("updateItem", event);
    },
    getCategory() {
      if (this.tab == 0) {
        return this.movies;
      } else if (this.tab == 1) {
        return this.series;
      } else {
        return this.games;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;

  .left-panel {
    height: fit-content;
    width: 200px;
    margin-right: 1rem;
  }

  .v-tabs-items {
    width: 100%;
    max-height: calc(100vh - 85px);
    overflow: auto;

    .tab-content {
      display: flex;
      flex-direction: column;

      &.grid {
        display: grid;
        grid-template-columns: 33.33% 33.33% 33.33%;
      }
    }
  }
}
</style>
