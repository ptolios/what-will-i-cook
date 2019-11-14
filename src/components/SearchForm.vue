<template>
  <v-form>
    <div class="pa-4">
      <search-box label="Search using keywords" autofocus></search-box>
    </div>

    <div class="pa-4">
      <div class="text-center">
        <app-btn color="primary font-weight-bold">Search</app-btn>
      </div>
    </div>
  </v-form>
</template>

<script>
import AppBtn from "@/components/AppBtn.vue";
import SearchBox from "@/components/SearchBox.vue";
export default {
  components: {
    "search-box": SearchBox,
    "app-btn": AppBtn
  },
  data() {}
};
</script>

<style></style>
