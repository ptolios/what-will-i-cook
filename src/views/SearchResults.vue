<template>
  <v-container>
    <v-row class="flex-grow-0" justify="center" align="baseline">
      <v-col cols="12">
        <div class="my-2">
          <h1 class="text-center primary--text font-weight-black">
            Search Results
          </h1>
        </div>
      </v-col>
      <v-col class="my-1" cols="12">
        <h4 class="text-center secondary--text font-weight-regular">
          You are searching for:
          <span class="font-italic">{{ query }}</span>
        </h4>
      </v-col>
      <v-col cols="12">
        <search-box class="mt-2 mx-6"></search-box>
      </v-col>
      <v-col
        align-self="stretch"
        cols="6"
        sm="4"
        md="3"
        v-for="recipe in response.results"
        :key="recipe.id"
      >
        <horizontal-card :recipe="recipe"></horizontal-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";
import HorizontalCard from "@/components/Recipe/RecipeCardHorizontal.vue";
import response from "@/search-results";
export default {
  components: {
    SearchBox,
    HorizontalCard
  },
  data() {
    return {
      query: "Pasta",
      response
    };
  }
};
</script>

<style></style>
