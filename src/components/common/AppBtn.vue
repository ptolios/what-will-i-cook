<template>
  <v-btn
    v-bind="$attrs"
    @click="$emit('btnclicked')"
    :class="btnClass"
    :color="color"
    rounded
  >
    <span class="text-capitalize">
      <slot></slot>
    </span>
  </v-btn>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "primary"
    }
  },
  data() {
    return {
      btnClass: ""
    };
  },
  mounted: function() {
    if (this.$props.color === "primary") {
      this.btnClass = "btn-class-primary";
    }
    if (this.$props.color === "secondary") {
      this.btnClass = "btn-class-secondary";
    }
  }
};
</script>

<style scoped>
.btn-class-primary {
  box-shadow: 0px 5px 1px #fe9200;
}
.btn-class-secondary {
  box-shadow: 0px 5px 1px #00a702;
}
</style>
