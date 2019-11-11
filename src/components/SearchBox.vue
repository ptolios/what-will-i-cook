<template>
  <v-text-field
    class="align-self-center"
    color="secondary"
    background-color="ingredients"
    :label="label"
    :autofocus="autofocus"
    rounded
    single-line
    filled
    append-icon="mdi-search"
  ></v-text-field>
</template>

<script>
export default {
  props: ["label", "autofocus"]
};
</script>

<style scoped></style>
