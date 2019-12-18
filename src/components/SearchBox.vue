<template>
  <v-text-field
    color="secondary"
    background-color="ingredients"
    :label="label"
    :autofocus="autofocus"
    :height="height"
    rounded
    single-line
    filled
  >
    <v-btn slot="append" color="secondary" class="mx-0" fab dark>
      <v-icon color="white" size="2.2em">search</v-icon>
    </v-btn>
  </v-text-field>
</template>

<script>
export default {
  props: ["label", "autofocus", "height"]
};
</script>

<style scoped>
::v-deep .v-input__append-inner {
  padding: 0 !important;
  margin: 0 !important;
  height: 100%;
  position: relative;
  right: -24px;
}

.v-btn {
  box-shadow: none;
}
</style>
