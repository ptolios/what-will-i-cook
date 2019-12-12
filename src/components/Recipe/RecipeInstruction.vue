<template>
  <div>
    <v-list-item class="font-weight-bold d-flex py-2" selectable>
      <div class=" d-flex grey--text text--darken-3">
        <slot name="number"></slot>
        <span class="mx-2">-</span>
        <slot name="step"></slot>
      </div>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  props: ["instruction"]
};
</script>

<style scoped>
.v-list-item {
  align-items: baseline;
}
</style>
