<template>
  <v-card color="primary" :href="'/recipe/' + recipe.id" dark>
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
    </div>
  </v-card>
</template>

<script>
import AppBtn from "@/components/common/AppBtn.vue"
import PreptimeChip from "@/components/common/PreptimeChip.vue"
export default {
  components: {
    PreptimeChip
  },
  props: {
    recipe: Object,
    baseImageUrl: String
  },
  computed: {
    imageUrl() {
      return this.baseImageUrl + this.recipe.image
    }
  }
}
</script>
<style scoped>
.v-card__title {
  word-break: unset !important;
}
</style>
