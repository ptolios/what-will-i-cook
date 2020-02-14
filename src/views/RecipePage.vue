<template>
  <v-container :style="narrowContainer">
    <v-row v-if="loading">
      <v-progress-circular
        indeterminate
        color="secondary"
      ></v-progress-circular>
    </v-row>
    <v-row v-else-if="error" class="mt-5">
      <v-card>{{ error }}</v-card>
    </v-row>
    <div v-else>
      <recipe-overview :imageUrl="image">
        <template v-slot:title>{{ recipe.title }}</template>
        <template v-slot:preparation-minutes>
          {{ recipe.preparationMinutes }}
        </template>
        <template v-slot:cooking-minutes>{{ recipe.cookingMinutes }}</template>
        <template v-slot:servings>{{ recipe.servings }}</template>
      </recipe-overview>
      <v-card>
        <recipe-ingredients :ingredients="ingredients"></recipe-ingredients>
      </v-card>
      <v-container class="px-0">
        <v-row>
          <v-col cols="12" md="8">
            <recipe-instructions :instructions="instructions" />
          </v-col>
          <v-col
            class="d-md-block py-6 mx-auto"
            cols="12"
            sm="8"
            md="4"
            offset-md="0"
          >
            <v-subheader
              class="title primary--text font-weight-black mt-8 justify-center justify-md-start "
            >
              Similar recipes
            </v-subheader>
            <v-row v-if="similarRecipes && !loading">
              <v-col>
                <similar-recipe
                  class="my-2 mx-auto"
                  color="primary"
                  max-width="350"
                  v-for="(similarRecipe, index) in similarRecipes"
                  :key="index"
                  :href="'/recipe/' + similarRecipe.id"
                  :title="similarRecipe.title"
                  :readyInMinutes="similarRecipe.readyInMinutes"
                  :imageUrl="baseImageUrl + similarRecipe.image"
                ></similar-recipe>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>

<script>
import { config } from "@/plugins/api-config"
import { fetchRecipe, getSimilarRecipes } from "@/api-utils/spoonacular-api"
import RecipeOverview from "@/components/Recipe/RecipeOverview.vue"
import RecipeIngredients from "@/components/Recipe/RecipeIngredients.vue"
import RecipeInstructions from "@/components/Recipe/RecipeInstructions.vue"
import SimilarRecipe from "@/components/Recipe/SimilarRecipe.vue"

export default {
  components: {
    RecipeOverview,
    RecipeIngredients,
    RecipeInstructions,
    SimilarRecipe
  },
  data() {
    return {
      baseImageUrl: "https://spoonacular.com/recipeImages/",
      recipe: {},
      similarRecipes: undefined,
      loading: true,
      error: false
    }
  },
  computed: {
    image() {
      return this.recipe.image
    },
    ingredients() {
      return this.recipe.extendedIngredients
    },
    instructions() {
      return this.recipe.analyzedInstructions[0].steps
    },
    narrowContainer() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return ""
        case "sm":
          return "max-width: 80%"
        case "md":
          return "max-width: 70%"
        case "lg":
          return "max-width: 60%"
      }
      // else
      return "max-width: 50%;"
    }
  },
  mounted: function() {
    const id = this.$route.params.id
    this.$nextTick(function() {
      fetchRecipe({ id }, config)
        .then(response => {
          const { data } = response
          this.recipe = data
          this.loading = false
        })
        .catch(error => {
          this.loading = false
          this.error = error
        })
    })
    this.$nextTick(function() {
      getSimilarRecipes({ id, number: 5 }, config)
        .then(response => {
          this.similarRecipes = response.data
        })
        .catch(error => {
          this.loading = false
          this.error = error
        })
    })
  }
}
</script>

<style scoped></style>
