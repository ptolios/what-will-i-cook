<template>
  <h1 style="font-family: Pacifico, cursive !important;" :color="color">
    <slot></slot>
  </h1>
</template>

<script>
export default {
  props: ["color"]
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Pacifico&display=swap");
</style>
