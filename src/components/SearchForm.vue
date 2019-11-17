<template>
  <v-form>
    <div class="pa-4">
      <search-box label="Search using keywords" autofocus></search-box>
    </div>
  </v-form>
</template>

<script>
import SearchBox from "@/components/SearchBox.vue";
export default {
  components: {
    "search-box": SearchBox
  },
  data() {
    return {};
  }
};
</script>

<style></style>
