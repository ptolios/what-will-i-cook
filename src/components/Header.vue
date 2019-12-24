<template>
  <v-app-bar class="white" app :inverted-scroll="invertedScroll">
    <v-app-bar-nav-icon color="primary"></v-app-bar-nav-icon>
    <v-spacer />
    <app-title class="ma-auto">
      <h3 class="primary--text align-self-stretch">
        What will I cook today?
      </h3>
    </app-title>
    <v-spacer />
    <v-btn
      to="/"
      class="mr-1"
      fab
      icon
      right
      v-ripple="{ class: 'primary--text' }"
    >
      <v-avatar size="1.71428em">
        <svg fill="#FFC501" class="mb-1">
          <use xlink:href="@/assets/meal.svg#Layer_1"></use>
        </svg>
      </v-avatar>
    </v-btn>
  </v-app-bar>
</template>

<script>
import AppTitle from "@/components/common/AppTitle.vue";
export default {
  components: {
    AppTitle
  },
  props: ["invertedScroll"]
};
</script>

<style scoped></style>
