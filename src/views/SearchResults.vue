<template>
  <v-container :style="responsiveContainer">
    <v-row class="flex-grow-0" justify="start" align="baseline">
      <v-col cols="12">
        <search-form
          @submitQuery="goToResult"
          v-model="initialQuery"
          class="mt-2 mx-6"
          label="Search again"
        />
      </v-col>
      <v-col cols="12" class="py-0">
        <div class="my-0">
          <h1 class="text-center primary--text font-weight-black">
            Search Results
          </h1>
        </div>
      </v-col>
      <v-col v-if="initialQuery" class="py-1 mb-4" cols="12">
        <h4 class="text-center secondary--text font-weight-regular">
          for
          <span class="font-italic">{{ initialQuery }}</span>
        </h4>
      </v-col>
      <v-col cols="12">
        <v-row v-if="results.length" align="stretch">
          <v-col
            class="d-flex justify-end"
            align-self="stretch"
            cols="6"
            sm="4"
            md="3"
            v-for="recipe in results"
            :key="recipe.id"
          >
            <v-skeleton-loader
              v-if="loading"
              type="card"
              transition="scale-transition"
            />
            <v-card v-else-if="error" class="primary">
              Error: {{ error }}
            </v-card>
            <horizontal-card
              v-else
              :recipe="recipe"
              :baseImageUrl="baseImageUrl"
              class="flex-grow-1"
            ></horizontal-card>
          </v-col>
        </v-row>
        <h3 v-else class="text-center">
          Sorry, no results for {{ initialQuery }}...
        </h3>
      </v-col>
      <v-col cols="12">
        <div class="d-flex justify-center">
          <app-btn @btnclicked="loadMore" color="secondary">
            See More...
          </app-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { config } from "@/plugins/api-config"
import { searchRecipes } from "@/api-utils/spoonacular-api"
import AppBtn from "@/components/common/AppBtn.vue"
import SearchForm from "@/components/common/search/SearchForm.vue"
import HorizontalCard from "@/components/Recipe/RecipeCardHorizontal.vue"

export default {
  components: {
    AppBtn,
    SearchForm,
    HorizontalCard
  },
  data() {
    return {
      loading: true,
      error: false,
      initialQuery: "",
      results: [],
      baseImageUrl: "",
      params: {
        number: 12,
        offset: 0
      }
    }
  },
  computed: {
    responsiveContainer() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return ""
        case "sm":
          return "max-width: 80%"
        case "md":
          return "max-width: 70%"
        case "lg":
          return "max-width: 60%"
      }
      // else
      return "max-width: 50%;"
    }
  },
  watch: {
    initialQuery: function() {
      // if query changes reset results & offset
      this.results = []
      this.params.offset = 0
      this.getResponse(this.params)
    }
  },
  methods: {
    getResponse(params) {
      searchRecipes({ query: this.initialQuery, ...params }, config)
        .then(response => {
          this.loading = false
          const { data } = response
          this.results.push(...data.results)
          this.baseImageUrl = data.baseUri
        })
        .catch(error => {
          this.loading = false
          this.error = error
        })
    },
    goToResult(event) {
      this.initialQuery = event
    },
    loadMore() {
      this.params.offset += this.params.number
      this.getResponse(this.params)
    }
  },
  mounted() {
    this.initialQuery = this.$route.query.query
  }
}
</script>

<style></style>
