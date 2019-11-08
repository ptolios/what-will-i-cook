<template>
  <v-btn :class="klass" :color="color" rounded x-large>
    <span class="text-capitalize">
      <slot></slot>
    </span>
  </v-btn>
</template>

<script>
export default {
  props: ["klass", "color"]
};
</script>

<style scoped>
button {
  box-shadow: 0px 5px 1px #fe9200;
}
</style>
