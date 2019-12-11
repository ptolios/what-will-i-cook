<template>
  <v-container>
    <v-row v-if="loading">
      <v-progress-circular
        indeterminate
        color="secondary"
      ></v-progress-circular>
    </v-row>
    <v-row v-else-if="error" class="mt-5">
      <v-card>
        {{ error }}
      </v-card>
    </v-row>
    <v-row v-else>
      <v-col>
        <recipe-overview :imageUrl="image">
          <template v-slot:title>
            {{ recipe.title }}
          </template>
          <template v-slot:preparation-minutes>
            {{ recipe.preparationMinutes }}
          </template>
          <template v-slot:cooking-minutes>
            {{ recipe.cookingMinutes }}
          </template>
          <template v-slot:servings>
            {{ recipe.servings }}
          </template>
        </recipe-overview>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { fetchRecipe } from "@/api-utils/spoonacular-api";
import RecipeOverview from "@/components/Recipe/RecipeOverview.vue";

const apiKey = process.env.VUE_APP_SPOONACULAR_API_KEY || "";
const baseURL = process.env.VUE_APP_SPOONACULAR_API_URL || "";
const config = { apiKey, baseURL };

export default {
  components: {
    RecipeOverview
  },
  data() {
    return {
      recipe: {},
      loading: true,
      // image: "https://spoonacular.com/recipeImages/218768-556x370.jpg"
      error: false
    };
  },
  computed: {
    image() {
      return this.recipe.image;
    }
  },
  mounted() {
    const id = this.$route.params.id;
    this.recipe = fetchRecipe({ id }, config)
      .then(response => {
        const { data } = response;
        this.recipe = data;
        console.log(data);
        this.loading = false;
      })
      .catch(error => {
        this.loading = false;
        this.error = error;
      });
  }
};
</script>

<style scoped></style>
