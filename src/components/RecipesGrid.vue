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
    <v-row class="d-flex" justify="space-around">
      <v-col
        v-for="recipe in recipes"
        :key="recipe.id"
        class="d-flex"
        align-self="stretch"
        cols="8"
        sm="4"
        md="4"
        lg="3"
      >
        <v-skeleton-loader
          v-if="loading"
          class="ma-2"
          type="card"
          transition="scale-transition"
        />
        <v-card v-else-if="error" class="primary">Error: {{ error }}</v-card>
        <recipe-card v-else :recipe="recipe" class="ma-2"></recipe-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { config } from "@/plugins/api-config"
import { getRandomRecipes } from "@/api-utils/spoonacular-api"
import RecipeCard from "@/components/RecipeCard.vue"

export default {
  components: {
    "recipe-card": RecipeCard
  },
  data() {
    return {
      loading: true,
      error: false,
      recipes: {}
    }
  },
  mounted() {
    getRandomRecipes({ number: 12 }, config)
      .then(response => {
        const { data } = response
        this.recipes = data.recipes
        this.loading = false
      })
      .catch(error => {
        this.loading = false
        this.error = error
      })
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Pacifico&display=swap");
</style>
