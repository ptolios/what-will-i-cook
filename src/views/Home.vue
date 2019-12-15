<template>
  <div>
    <v-container class="height100 pa-0" fluid>
      <div class="d-flex flex-column back fill-height">
        <div class="app-title d-flex align-center justify-center">
          <app-title class="h1 primary--text text-center font-weight-medium"
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
            <app-btn
              @btnclicked="randomRecipeId"
              color="primary"
              class="font-weight-bold"
              >Surprise Me!</app-btn
            >
          </div>
        </div>
      </div>
    </v-container>
    <recipes-grid ref="recipes"></recipes-grid>
  </div>
</template>

<script lang="ts">
import AppTitle from "@/components/AppTitle.vue";
import AppBtn from "@/components/AppBtn.vue";
import RecipesGrid from "@/components/RecipesGrid.vue";
import SearchForm from "@/components/SearchForm.vue";
import { getRandomRecipes } from "@/api-utils/spoonacular-api";

const apiKey = process.env.VUE_APP_SPOONACULAR_API_KEY || "";
const baseURL = process.env.VUE_APP_SPOONACULAR_API_URL || "";
const config = { apiKey, baseURL };

export default {
  components: {
    AppTitle,
    AppBtn,
    RecipesGrid,
    SearchForm
  },
  data() {
    return {
      //
    };
  },
  methods: {
    randomRecipeId() {
      getRandomRecipes({ number: 1 }, config).then(response => {
        const { data } = response;
        const id = data.recipes[0].id;
        this.$router.push({ name: "recipe", params: { id } });
      });
    }
  }
};
</script>

<style>
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
