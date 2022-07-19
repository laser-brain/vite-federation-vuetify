<template>
  <div class="flex">
    <v-label
      >Hello from remote ExampleComponent.vue - Count is {{ count }}</v-label
    >
    <v-btn @click="() => count++">Increment</v-btn>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const count = ref(0);
</script>
<style scoped lang="scss">
.flex {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
