<template>
  <v-card :href="'/recipe/' + recipe.id" color="primary" dark>
    <v-img :src="imageUrl" aspect-ratio="1">
      <v-chip class="mt-2 ml-2" color="primary" small>
        <v-icon class small>timer</v-icon>
        <span class="font-weight-bold px-1"
          >{{ recipe.readyInMinutes }} min</span
        >
      </v-chip>
    </v-img>
    <div class="d-flex flex-column">
      <v-card-title
        class="subtitle-1 text-center font-weight-black my-2 py-0"
        style="font-family: Poppins !important;"
        >{{ recipe.title }}</v-card-title
      >
      <app-btn class="mx-auto mt-2 mb-4" color="secondary" small>
        Details
      </app-btn>
    </div>
  </v-card>
</template>

<script>
import AppBtn from "@/components/AppBtn.vue";
export default {
  components: {
    AppBtn
  },
  props: { recipe: Object },
  computed: {
    imageUrl() {
      return "https://spoonacular.com/recipeImages/" + this.$props.recipe.image;
    }
  }
};
</script>
<style scoped>
.container {
  padding: 0;
}

.v-card__title {
  word-break: unset !important;
}
</style>
