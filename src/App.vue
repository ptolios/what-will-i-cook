<template>
  <v-app>
    <Header />
    <v-content>
      <v-container class="fill-height pa-0" fluid>
        <v-img
          class="fill-height remove-top-margin"
          src="https://farm5.staticflickr.com/4137/4788033666_6569900768_b.jpg"
          position="top center"
          gradient="rgba(0,0,0,.4), rgba(0,0,0,.4)"
          height="100vh"
        ></v-img>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "./components/Header.vue";

export default Vue.extend({
  name: "App",
  components: {
    Header
  },
  data: () => ({
    //
  })
});
</script>

<style>
.remove-top-margin {
  margin-top: -56px;
}

v-content {
  margin-top: 0;
  padding-top: 0;
}

.fill-hght {
  height: 100%;
}
</style>
