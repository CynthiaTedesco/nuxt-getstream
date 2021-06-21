<template>
  <div class="container">
    <div>
      <h1 class="title">nuxt-getstream</h1>
      <span>{{ generatedToken }}</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    generatedToken() {
      return this.$store.getters["getstream/token"]
    },
  },
};
</script>

<style>
</style>
