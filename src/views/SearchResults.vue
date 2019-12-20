<template>
  <v-container>
    <v-row class="flex-grow-0" justify="start" align="baseline">
      <v-col cols="12">
        <search-form class="mt-2 mx-6" label="Search again" />
      </v-col>
      <v-col cols="12" class="py-0">
        <div class="my-0">
          <h1 class="text-center primary--text font-weight-black">
            Search Results
          </h1>
        </div>
      </v-col>
      <v-col class="py-1 mb-4" cols="12">
        <h4 class="text-center secondary--text font-weight-regular">
          for
          <span class="font-italic">{{ initialQuery }}</span>
        </h4>
      </v-col>
      <v-col
        align-self="stretch"
        cols="6"
        sm="4"
        md="3"
        v-for="recipe in response.results"
        :key="recipe.id"
      >
        <horizontal-card
          :recipe="recipe"
          :baseImageUrl="baseImageUrl"
        ></horizontal-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SearchForm from "@/components/SearchForm.vue";
import HorizontalCard from "@/components/Recipe/RecipeCardHorizontal.vue";
import response from "@/search-results";
export default {
  components: {
    SearchForm,
    HorizontalCard
  },
  data() {
    return {
      initialQuery: "",
      response
    };
  },
  computed: {
    baseImageUrl() {
      return response.baseUri;
    }
  },
  mounted() {
    this.initialQuery = this.$route.query.query;
  }
};
</script>

<style></style>
