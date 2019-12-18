<template>
  <v-app-bar class="white" app :inverted-scroll="invertedScroll">
    <v-app-bar-nav-icon color="primary"></v-app-bar-nav-icon>
    <v-spacer />
    <app-title class="ma-auto">
      <h4 class="primary--text align-self-stretch">
        What will I cook today?
      </h4>
    </app-title>
    <v-spacer />
    <v-btn class="mr-1" fab icon right v-ripple="{ class: 'primary--text' }">
      <v-icon color="primary" dark>room_service</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
import AppTitle from "@/components/AppTitle.vue";
export default {
  components: {
    AppTitle
  },
  props: ["invertedScroll"]
};
</script>

<style scoped></style>
