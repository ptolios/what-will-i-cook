<template>
  <v-list class="ingredients px-3 mt-4" disabled dense>
    <div class="d-flex justify-center justify-md-start py-6">
      <v-subheader class="title primary--text font-weight-black">
        Ingredients
      </v-subheader>
    </div>
    <v-list-item-group>
      <v-container class="pa-0">
        <v-row class="align-end">
          <v-col
            class="pa-1"
            cols="12"
            md="6"
            v-for="(ingredient, index) in ingredients"
            :key="index"
          >
            <recipe-ingredient :ingredient="ingredient.original" />
          </v-col>
        </v-row>
      </v-container>
    </v-list-item-group>
  </v-list>
</template>

<script>
import RecipeIngredient from "@/components/Recipe/RecipeIngredient.vue"

export default {
  components: {
    RecipeIngredient
  },
  props: ["ingredients"]
}
</script>

<style></style>
