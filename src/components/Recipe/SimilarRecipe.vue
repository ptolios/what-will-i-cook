<template>
  <v-card>
    <v-container>
      <v-row>
        <v-col cols="4">
          <v-img :src="imageUrl"></v-img>
        </v-col>
        <v-col cols="8">
          <preptime-chip color="primary">{{ readyInMinutes }}</preptime-chip>
          <v-card-title>{{ title }}</v-card-title>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import PreptimeChip from "@/components/common/PreptimeChip.vue";
export default {
  props: {
    title: String,
    imageUrl: String,
    readyInMinutes: Number
  }
};
</script>

<style></style>
