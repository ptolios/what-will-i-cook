<template>
  <v-app>
    <app-header :invertedScroll="invertedScroll" />
    <v-content>
      <router-view></router-view>
    </v-content>
    <app-footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue"

import AppHeader from "@/components/Header.vue"
import AppFooter from "@/components/Footer.vue"

export default Vue.extend({
  name: "App",
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      invertedScroll: false
    }
  },
  methods: {
    manageHeaderVisibility() {
      this.invertedScroll = this.$route.path == "/" ? true : false
    }
  },
  // Control Header visibility
  updated() {
    this.manageHeaderVisibility()
  },
  created() {
    this.manageHeaderVisibility()
  }
})
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
#app {
  font-family: "Poppins", sans-serif;
  background: none;
}
</style>
