<template>
  <v-form>
    <search-box @submit="goTo" :label="label" v-model="query"></search-box>
  </v-form>
</template>

<script>
import SearchBox from "@/components/common/search/SearchBox.vue";
export default {
  components: {
    "search-box": SearchBox
  },
  props: {
    label: String
  },
  data() {
    return {
      query: ""
    };
  },
  methods: {
    goTo(event) {
      this.$router.push({ path: "/search", query: { query: event } });
    }
  }
};
</script>

<style></style>
