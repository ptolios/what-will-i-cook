<template>
  <v-container>
    <v-row> </v-row>
  </v-container>
</template>

<script>
import { fetchRecipe } from "@/api-utils/spoonacular-api";

const apiKey = process.env.VUE_APP_SPOONACULAR_API_KEY || "";
const baseURL = process.env.VUE_APP_SPOONACULAR_API_URL || "";
const config = { apiKey, baseURL };

export default {
  data() {
    return {
      recipe: {},
      loading: true,
      error: false
    };
  },
  mounted() {
    const id = this.$route.params.id;
    this.recipe = fetchRecipe({ id }, config)
      .then(response => {
        const { data } = response;
        this.recipe = data;
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
