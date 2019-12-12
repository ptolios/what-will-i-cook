<template>
  <v-list class="px-3 mt-4" disabled dense>
    <div class="d-flex justify-center py-6">
      <v-subheader class="title primary--text font-weight-black ml-4">
        Instructions
      </v-subheader>
    </div>
    <v-list-item-group>
      <recipe-instruction
        v-for="(instruction, index) in instructions"
        :key="index"
      >
        <template v-slot:number>
          {{ instruction.number }}
        </template>
        <template v-slot:step>
          {{ instruction.step }}
        </template>
      </recipe-instruction>
    </v-list-item-group>
  </v-list>
</template>

<script>
import RecipeInstruction from "@/components/Recipe/RecipeInstruction.vue";

export default {
  components: {
    RecipeInstruction
  },
  props: ["instructions"]
};
</script>

<style></style>
