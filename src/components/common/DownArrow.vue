<template>
  <div class="arrow bounce">
    <v-btn class="secondary" fab small @click="$vuetify.goTo(target, options)">
      <v-icon color="white" size="2.2em">keyboard_arrow_down</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: ["target", "options"]
};
</script>

<style scoped>
.arrow {
  text-align: center;
  margin: 8% 0;
}
.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}
</style>
