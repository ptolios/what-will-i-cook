<template>
  <v-text-field
    v-bind="$attrs"
    background-color="ingredients"
    rounded
    single-line
    filled
    :value="val"
    @input="$emit('input', (val = $event))"
  >
    <v-btn
      slot="append"
      color="secondary"
      class="mx-0"
      fab
      dark
      type="submit"
      @click.prevent="submtited"
    >
      <v-icon color="white" size="2.2em">search</v-icon>
    </v-btn>
  </v-text-field>
</template>

<script>
export default {
  props: {
    value: String
  },
  data() {
    return {
      val: ""
    };
  },
  methods: {
    submitted() {
      this.$emit("submitQuery", this.value);
    }
  },
  mounted() {
    this.val = this.value;
  }
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
