<template>
  <v-card :href="'/recipe/' + recipe.id" color="primary" dark>
    <v-img :src="recipe.image">
      <preptime-chip color="primary">
        {{ recipe.readyInMinutes }}
      </preptime-chip>
    </v-img>
    <v-card-title
      class="subtitle-1 text-center font-weight-black"
      style="font-family: Poppins !important;"
    >
      {{ recipe.title }}
    </v-card-title>
  </v-card>
</template>

<script>
import PreptimeChip from "@/components/common/PreptimeChip.vue"
export default {
  components: { PreptimeChip },
  props: { recipe: Object }
}
</script>
<style>
.v-card__title {
  word-break: unset !important;
}
</style>
