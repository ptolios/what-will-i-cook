<template>
  <v-chip class="mt-2 ml-2" v-bind="$attrs">
    <v-icon class>timer</v-icon>
    <span class="font-weight-bold px-1" data-test="prep-chip">
        <slot>-</slot> min
    </span>
  </v-chip>
</template>

<script>
export default {};
</script>

<style>
</style>