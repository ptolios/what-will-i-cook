<template>
  <v-container>
    <v-row justify="center" align="stretch">
      <v-col cols="auto">
        <div class="my-2">
          <h2 class="primary--text font-weight-black">Search Results</h2>
        </div>
      </v-col>
      <v-col class="my-1" cols="auto">
        <h4 class="secondary--text font-weight-regular">
          You are searching for: <span class="font-italic">{{ query }}</span>
        </h4>
      </v-col>
      <v-col cols="auto">
        <search-box class="mt-2 mx-6"></search-box>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";
export default {
  components: {
    SearchBox
  },
  data() {
    return {
      query: "Pasta"
    };
  }
};
</script>

<style></style>
