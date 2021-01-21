<template>
  <div>
    <template>
      <v-card outlined>
        <v-list-item>
          <v-container>
            <router-link :to="'/item/' + item.imdbID" class="image-wrapper">
              <div class="image-container">
                <v-list-item-avatar
                  v-if="showAvatar"
                  style="margin: 0;"
                  size="100"
                  color="grey"
                  tile
                >
                  <v-img
                    :src="item.Poster"
                    @error="imageLoadError($event)"
                  ></v-img>
                </v-list-item-avatar>
                <div v-else class="no-img">Image not available</div>
              </div>
            </router-link>

            <div class="item-content">
              <v-text-field
                v-model="title"
                outlined
                :filled="focus"
                @focus="focus = true"
                @blur="onBlur()"
                class="headline mb-1"
                hide-details
              />
              <v-list-item-title class="item-year"
                >{{ item.Year.substring(0, 4) }}
              </v-list-item-title>
            </div>
          </v-container>
        </v-list-item>
      </v-card>
    </template>
  </div>
</template>

<script>
export default {
  props: { item: Object },
  data() {
    return {
      title: this.item.Title,
      showAvatar: true,
      focus: false,
    };
  },
  methods: {
    onBlur() {
      this.focus = false;
      if (this.title != this.item.Title)
        this.$emit("titleChange", { Title: this.title });
    },
    imageLoadError(event) {
      this.showAvatar = false;
      console.log("Image failed to load>> ", event);
    },
  },
};
</script>

<style lang="scss" scoped>
.v-card {
  height: fit-content;
  margin: 5px;

  .container {
    display: flex;
    width: 100%;

    .image-wrapper {
      text-decoration: none;

      .image-container {
        display: flex;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 8px;
        overflow: hidden;
        width: 100px;
        height: 100px;
        margin-right: 1rem;

        .no-img {
          text-align: center;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .item-content {
      width: 100%;

      .item-year {
        border: 1px solid #a5a5a5;
        border-radius: 4px;
        padding: 10px;
      }
    }
  }
}
</style>
