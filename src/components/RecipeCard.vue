<template>
  <v-card :href="'/recipe/' + recipe.id" color="primary" dark>
    <v-img :src="recipe.image">
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
        >{{ recipe.title }}
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  props: { recipe: Object }
};
</script>
<style>
.v-card__title {
  word-break: unset !important;
}
</style>
