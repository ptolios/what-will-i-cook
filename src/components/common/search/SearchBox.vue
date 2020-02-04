<template>
  <v-text-field
    v-bind="$attrs"
    background-color="ingredients"
    rounded
    single-line
    filled
    v-model="query"
    data-test="textfield"
  >
    <v-btn
      slot="append"
      color="secondary"
      class="mx-0"
      fab
      dark
      type="submit"
      @click.prevent="submitted"
      data-test="searchbox-btn"
    >
      <v-icon color="white" size="2.2em">search</v-icon>
    </v-btn>
  </v-text-field>
</template>

<script>
export default {
  data() {
    return {
      query: ""
    };
  },
  methods: {
    submitted() {
      // remove excess whitespace from quey string
      const payload = this.query.replace(/\s+/g, " ").trim();
      this.$emit("submitQuery", payload);
    }
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
