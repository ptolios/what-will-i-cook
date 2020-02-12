<template>
  <v-card color="primary" dark>
    <v-img :src="imageUrl" aspect-ratio="1">
      <preptime-chip color="primary" small>
        {{ recipe.readyInMinutes }}
      </preptime-chip>
    </v-img>
    <div class="d-flex flex-column align-center">
      <v-card-title
        class="subtitle-1 text-center font-weight-black my-2 py-0"
        style="font-family: Poppins !important;"
        >{{ recipe.title }}</v-card-title
      >
      <app-btn
        :href="'/recipe/' + recipe.id"
        class="mx-auto mt-2 mb-4"
        color="secondary"
        small
      >
        <span class="font-weight-black">
          Details
        </span>
      </app-btn>
    </div>
  </v-card>
</template>

<script>
import AppBtn from "@/components/common/AppBtn.vue";
import PreptimeChip from "@/components/common/PreptimeChip.vue";
export default {
  components: {
    AppBtn,
    PreptimeChip
  },
  props: {
    recipe: Object,
    baseImageUrl: String
  },
  computed: {
    imageUrl() {
      return this.baseImageUrl + this.recipe.image;
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
