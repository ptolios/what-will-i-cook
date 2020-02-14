<template>
  <v-card v-bind="$attrs">
    <v-container class="pa-0">
      <v-row class="mx-0">
        <v-col cols="6" class="pa-0">
          <v-img :src="imageUrl" height="100%"></v-img>
        </v-col>
        <v-col cols="6" class="pl-0 pt-1">
          <preptime-chip color="white" text-color="primary" small>
            {{ readyInMinutes }}
          </preptime-chip>
          <v-card-subtitle class="white--text">{{ title }}</v-card-subtitle>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import PreptimeChip from "@/components/common/PreptimeChip.vue"
export default {
  components: {
    PreptimeChip
  },
  props: {
    title: String,
    imageUrl: String,
    readyInMinutes: Number
  }
}
</script>

<style></style>
