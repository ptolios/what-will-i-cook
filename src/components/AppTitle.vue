<template>
  <h1 :color="color">
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
