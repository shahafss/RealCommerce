<template>
  <div>
    <v-container v-if="item">
      <v-card>
        <img
          class="poster"
          v-if="showImage"
          :src="item.Poster"
          height="100%"
          @error="imageLoadError($event)"
        />

        <div class="card-content">
          <div class="card-title">
            <v-card-title>{{ item.Title }}</v-card-title>
            <v-card-subtitle class="card-year">
              ({{ item.Year.substring(0, 4) }})
            </v-card-subtitle>
          </div>
          <v-card-subtitle>Type: {{ item.Type }} </v-card-subtitle>
          <div style="display: flex">
            <v-btn
              class="btn-imdb"
              :href="'https://www.imdb.com/title/' + item.imdbID"
              color="success"
            >
              Show on imdb
            </v-btn>
          </div>
        </div>
      </v-card>
      <v-btn rounded class="btn-back" to="/" color="primary">
        <v-icon right> mdi-arrow-left-circle </v-icon>Back</v-btn
      >
    </v-container>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("fetchItems");
  },
  data() {
    return {
      itemId: this.$route.params.id,
      showImage: true,
    };
  },
  computed: {
    item() {
      return this.$store.getters.getAllItems.find(
        (item) => item.imdbID == this.itemId
      );
    },
  },
  methods: {
    imageLoadError(event) {
      this.showImage = false;
      console.log("Image failed to load>> ", event);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  .v-card {
    height: 300px;
    width: 600px;
    display: flex;

    .poster {
      border-radius: 4px 0 0 4px;
    }

    .card-content {
      width: 100%;

      .card-title {
        display: flex;
        align-items: center;
      }

      .card-year {
        padding: 16px 0 0 0;
      }

      .btn-imdb {
        margin: 8rem auto;
      }
    }
  }
  .btn-back {
    margin-top: 2rem;
    .v-icon {
      margin: 0;
      margin-right: 10px;
    }
  }
}
</style>
