<template>
  <v-form>
    <search-box @submitQuery="submited" :label="label" v-model="query" />
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
    submited(event) {
      this.$emit("submitQuery", this.query);
      this.$router.push({ path: "/search", query: { query: event } });
    }
  }
};
</script>

<style></style>
