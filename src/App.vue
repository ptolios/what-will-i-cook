<template>
  <v-app>
    <Header />
    <v-content>
      <v-container class="fill-height pa-0" fluid>
        <v-img
          class="fill-height remove-top-margin align-center"
          src="https://farm5.staticflickr.com/4137/4788033666_6569900768_b.jpg"
          position="top center"
          gradient="rgba(0,0,0,.4), rgba(0,0,0,.4)"
          height="100vh"
        >
          <v-row class="fill-height align-content-space-around" wrap>
            <v-col class="pa-1" cols="12">
              <app-title
                style="font-family: Pacifico, cursive !important;"
                class="display-1 primary--text text-center font-weight-medium mb-12"
                >What should I cook today?</app-title
              >
            </v-col>
            <v-col class="offset-1" cols="10">
              <search-box></search-box>
            </v-col>
            <v-col cols="12">
              <div class="text-center">
                <app-btn color="primary font-weight-bold">Surprise Me!</app-btn>
              </div>
            </v-col>
          </v-row>
        </v-img>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header.vue";
import AppBtn from "@/components/AppBtn.vue";
import AppTitle from "@/components/AppTitle.vue";
import SearchBox from "@/components/SearchBox.vue";

export default Vue.extend({
  name: "App",
  components: {
    AppBtn,
    AppTitle,
    Header,
    SearchBox
  },
  data: () => ({
    //
  })
});
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
#app {
  font-family: "Poppins", sans-serif;
}

.remove-top-margin {
  margin-top: -56px;
}

v-content {
  margin-top: 0;
  padding-top: 0;
}

v-row {
  height: 100%;
}
</style>
