<template>
  <div>
    <v-row class="ma-2">
      <v-col
        cols="8"
        offset="2"
        class="primary--text"
        align="center"
        align-self="center"
        justify-self="center"
      >
        <h1 style="font-family: Pacifico, cursive !important;">How about...</h1>
      </v-col>
    </v-row>
    <v-row class="d-flex" justify="center">
      <v-progress-circular
        v-if="loading"
        indeterminate
        color="secondary"
      ></v-progress-circular>
      <v-card v-else-if="error" class="primary" height="600px">Error</v-card>
      <v-col
        v-else
        v-for="recipe in recipes"
        :key="recipe.id"
        cols="8"
        sm="6"
        md="3"
      >
        <recipe-card :recipe="recipe" class="ma-2"></recipe-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import RecipeCard from "@/components/RecipeCard.vue";
import recipes from "@/random-recipes";
const recipeProps = {
  id: 998877,
  title: "Blueberry, Chocolate & Cocao Superfood Pancakes",
  image: "https://spoonacular.com/recipeImages/716429-556x370.jpg",
  readyInMinutes: 45
};
export default {
  components: {
    "recipe-card": RecipeCard
  },
  data() {
    return {
      loading: false,
      error: false,
      recipes
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Pacifico&display=swap");
</style>
