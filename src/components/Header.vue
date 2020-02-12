<template>
  <v-app-bar class="white" app :inverted-scroll="invertedScroll">
    <app-title class="ma-auto">
      <h3 class="primary--text align-self-stretch text-truncate">
        <a href="/">What will I cook today?</a>
      </h3>
    </app-title>
  </v-app-bar>
</template>

<script>
import AppTitle from "@/components/common/AppTitle.vue";
export default {
  components: {
    AppTitle
  },
  props: ["invertedScroll"]
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
