<template>
  <v-avatar :size="size">
    <svg :fill="fill">
      <use :xlink:href="href + '#' + svgid"></use>
    </svg>
  </v-avatar>
</template>

<script>
export default {
  props: ["svgid", "size", "fill", "href"]
};
</script>
