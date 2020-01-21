<template>
  <div>
    <v-container class="height100 pa-0" fluid>
      <div class="d-flex flex-column back fill-height justify-space-around">
        <div class="d-flex align-center justify-center height30">
          <app-title>
            <!-- The bound class makes the text responsive -->
            <h1
              class="primary--text text-center font-weight-medium"
              :class="[$vuetify.breakpoint.smAndUp ? 'display-2' : 'headline']"
            >
              What will I cook today?
            </h1>
          </app-title>
        </div>
        <div class="row flex-grow-0 flex-shrink-1 mt-8">
          <v-col
            class="pa-0"
            sm="10"
            offset-sm="1"
            md="8"
            offset-md="2"
            lg="6"
            offset-lg="3"
            xl="4"
            offset-xl="4"
          >
            <search-form class="px-4 mx-auto" label="Search using keywords" />
          </v-col>
        </div>
        <div>
          <div class="pa-4">
            <div class="text-center">
              <h2 class="primary--text">- or -</h2>
            </div>
          </div>
          <div class="pa-4">
            <div class="text-center">
              <app-btn
                @btnclicked="randomRecipeId"
                color="primary"
                class="font-weight-bold"
                x-large
                >Surprise Me!</app-btn
              >
            </div>
          </div>
        </div>
      </div>
    </v-container>
    <recipes-grid ref="recipes"></recipes-grid>
  </div>
</template>

<script lang="ts">
import { config } from "@/plugins/api-config";
import AppTitle from "@/components/common/AppTitle.vue";
import AppBtn from "@/components/common/AppBtn.vue";
import RecipesGrid from "@/components/RecipesGrid.vue";
import SearchForm from "@/components/common/search/SearchForm.vue";
import { getRandomRecipes } from "@/api-utils/spoonacular-api";
import router from "@/router";

export default {
  components: {
    AppTitle,
    AppBtn,
    RecipesGrid,
    SearchForm
  },
  data() {
    return {
      //
    };
  },
  methods: {
    randomRecipeId() {
      getRandomRecipes({ number: 1 }, config).then(response => {
        const { data } = response;
        const id = data.recipes[0].id;
        router.push({ name: "recipe", params: { id } });
      });
    }
  }
};
</script>

<style scoped>
v-content {
  margin-top: 0;
  padding-top: 0;
}

.height100 {
  /* height: calc(100vh - 56px); */
  height: 100vh;
}

.height30 {
  height: 30%;
}

.height15 {
  height: 15%;
}

/* Override vuetify style */
>>> h1.display-2,
h1.headline {
  font-family: Pacifico, cursive !important;
}

.back {
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.4)
    ),
    url(https://farm5.staticflickr.com/4137/4788033666_6569900768_b.jpg);
  background-size: cover;
  background-position: top center;
}
</style>
