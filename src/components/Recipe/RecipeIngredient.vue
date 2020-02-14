<template>
  <div>
    <v-list-item class="font-weight-bold d-flex py-2" selectable>
      <v-icon class="align-self-start py-2 pr-4" x-small color="primary"
        >fiber_manual_record</v-icon
      >
      <span class="grey--text text--darken-1">{{ ingredient }}</span>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  props: ["ingredient"]
}
</script>

<style scoped>
.v-list-item {
  align-items: baseline;
}
</style>
