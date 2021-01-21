<template>
  <div>
    {{ item }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemId: this.$route.params.id,
    };
  },
  computed: {
    item() {
      return this.$store.getters.getAllItems.find(
        (item) => item.imdbID == this.itemId
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
