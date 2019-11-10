<template>
  <h1 class="pacifico" :color="color">
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
.pacifico {
  font-family: "Pacifico", cursive !important;
}
</style>
