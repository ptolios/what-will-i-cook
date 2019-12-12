<template>
  <v-app>
    <app-header />
    <v-content>
      <router-view></router-view>
    </v-content>
    <!-- TODO: change header background from transparent to white when scrolling down -->
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

import AppHeader from "@/components/Header.vue";

export default Vue.extend({
  name: "App",
  components: {
    AppHeader
  }
});
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
#app {
  font-family: "Poppins", sans-serif;
  background: none;
}
</style>
