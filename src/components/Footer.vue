<template>
  <v-footer app dark padless absolute>
    <v-card class="flex" color="secondary" flat tile>
      <v-card-subtitle class="text-center">
        <div>
          Created with <a href="https://vuejs.org/">Vue.js 2</a> and
          <a href="https://vuetifyjs.com/">Vuetify 2</a>
        </div>
        <div>
          Using
          <a href="https://spoonacular.com/food-api">Spoonacular API</a>
        </div>
      </v-card-subtitle>
      <v-divider />
      <v-card-text class="caption py-2 text-center">
        <strong
          ><a href="https://my-resume-cv.netlify.com/" target="_blank"
            >Panos Tolios</a
          ></strong
        >
        - {{ new Date().getFullYear() }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {}
</script>

<style></style>
