<template>
  <v-list class="ingredients px-3 mt-4" disabled dense>
    <div class="d-flex justify-center py-6">
      <v-subheader class="title primary--text font-weight-black">
        Ingredients
      </v-subheader>
    </div>
    <v-list-item-group>
      <recipe-ingredient
        v-for="(ingredient, index) in ingredients"
        :key="index"
        :ingredient="ingredient.original"
      />
    </v-list-item-group>
  </v-list>
</template>

<script>
import RecipeIngredient from "@/components/Recipe/RecipeIngredient.vue";

export default {
  components: {
    RecipeIngredient
  },
  props: ["ingredients"]
};
</script>

<style></style>
