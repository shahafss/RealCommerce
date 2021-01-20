<template>
  <div>
    <template>
      <v-card outlined>
        <v-list-item three-line>
          <v-list-item-avatar v-if="showAvatar" size="80" color="grey">
            <v-img :src="item.Poster" @error="imageLoadError($event)"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-text-field
              v-model="title"
              outlined
              :filled="focus"
              @focus="focus = true"
              @blur="onBlur()"
              class="headline mb-1"
            />
            <v-list-item-subtitle
              >{{ item.Year.substring(0, 4) }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>{{ item.Type }} </v-list-item-subtitle>
          </v-list-item-content>
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
  height: 200px;
  margin: 5px;
}
</style>
