<template>
  <v-card color="primary" dark>
    <div class="d-flex flex-column flex-sm-row">
      <div
        class="recipe-info d-flex flex-column justify-space-around"
        :style="divMaxWidth"
      >
        <v-card-title class="title text-center font-weight-black mx-4">
          <slot name="title"></slot>
        </v-card-title>
        <div class="d-flex justify-space-around py-2">
          <div
            v-for="(sign, index) in signs"
            :key="index"
            class="d-flex flex-column align-center"
          >
            <div class="caption">{{ sign.title }}</div>
            <v-icon class="py-1">{{ sign.icon }}</v-icon>
            <div class="body-2">
              <slot :name="sign.slotName"></slot>
              {{ sign.extraText }}
            </div>
          </div>
        </div>
      </div>
      <v-img :src="imageUrl" />
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["imageUrl"],
  data() {
    return {
      signs: [
        {
          title: "preparation",
          icon: "local_dining",
          slotName: "preparation-minutes",
          extraText: "minutes"
        },
        {
          title: "cooking",
          icon: "timer",
          slotName: "cooking-minutes",
          extraText: "minutes"
        },
        {
          title: "servings",
          icon: "room_service",
          slotName: "servings",
          extraText: ""
        }
      ]
    };
  },
  computed: {
    divMaxWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "";
      }
      // else
      return "max-width: 35%;";
    }
  }
};
</script>

<style scoped>
.recipe-info {
  min-width: 230px;
}

.v-responsive {
  flex: 1 1 auto;
}
</style>
