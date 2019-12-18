<template>
  <v-card :href="'/recipe/' + recipe.id" color="primary" dark>
    <div class="d-flex">
      <v-img :src="imageUrl">
        <v-chip class="mt-2 ml-2" color="primary">
          <v-icon class>timer</v-icon>
          <span class="font-weight-bold px-1"
            >{{ recipe.readyInMinutes }} min</span
          >
        </v-chip>
      </v-img>
      <v-card-title
        class="subtitle-1 text-center font-weight-black"
        style="font-family: Poppins !important;"
      >
        {{ recipe.title }}
      </v-card-title>
    </div>
  </v-card>
</template>

<script>
export default {
  props: { recipe: Object },
  computed: {
    imageUrl() {
      return "https://spoonacular.com/recipeImages/" + this.$props.recipe.image;
    }
  }
};
</script>
<style>
.v-card__title {
  word-break: unset !important;
}
</style>
