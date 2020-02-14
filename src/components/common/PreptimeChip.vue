<template>
  <v-chip class="mt-2 ml-2" v-bind="$attrs">
    <v-icon class :small="small">timer</v-icon>
    <span class="font-weight-bold px-1" data-test="prep-chip">
      <slot>-</slot> min
    </span>
  </v-chip>
</template>

<script>
export default {
  data() {
    return {
      small: false
    }
  },
  mounted() {
    if ("small" in this.$attrs) {
      this.small = this.$attrs["small"]
    }
  }
}
</script>
