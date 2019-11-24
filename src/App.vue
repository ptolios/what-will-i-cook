<template>
  <v-app>
    <Header />
    <v-content>
      <v-container class="height100 pa-0 remove-top-margin" fluid>
        <div class="d-flex flex-column back fill-height">
          <div class="app-title d-flex align-center justify-center">
            <app-title
              class="h1 primary--text text-center font-weight-medium"
              >What will I cook today?</app-title
            >
          </div>
          <search-form></search-form>
          <div class="pa-4">
            <div class="text-center">
              <h2 class="primary--text">- or -</h2>
            </div>
          </div>
          <div class="pa-4">
            <div class="text-center">
              <app-btn color="primary" class="font-weight-bold"
                >Surprise Me!</app-btn
              >
            </div>
          </div>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Header from "@/components/Header.vue";
import AppTitle from "@/components/AppTitle.vue";
import AppBtn from "@/components/AppBtn.vue";
import SearchForm from "@/components/SearchForm.vue";

export default Vue.extend({
  name: "App",
  components: {
    AppTitle,
    AppBtn,
    Header,
    SearchForm
  },
  data() {
    return {
      //
    };
  }
});
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
#app {
  font-family: "Poppins", sans-serif;
  background: none;
}

.remove-top-margin {
  margin-top: -56px;
}

v-content {
  margin-top: 0;
  padding-top: 0;
}

.height100 {
  height: 100vh;
}

.app-title {
  height: 50%;
}

.back {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.4)
    ),
    url(https://farm5.staticflickr.com/4137/4788033666_6569900768_b.jpg);
  background-size: cover;
  background-position: top center;
}
</style>
