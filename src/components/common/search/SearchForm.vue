<template>
  <v-form data-test="searchform">
    <search-box
      @submitQuery="submitted"
      :label="label"
      v-model="query"
      data-test="searchbox"
    />
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
    submitted(event) {
      this.$emit("submitQuery", event);
      this.$router.push({ path: "/search", query: { query: event } });
    }
  }
};
</script>

<style></style>
