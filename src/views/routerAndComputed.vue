<template>
  <div>
    <p>searchConditions: {{ searchConditions }}</p>
    <ComputedInput />
  </div>
</template>

<script setup>
import { ref, computed, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useSearchStore } from "/src/store";
const $route = useRoute();
const $useSearchStore = useSearchStore();
const searchConditions = computed(() => $useSearchStore.searchConditions);
const { pageInit } = $useSearchStore;

watchEffect(() => {
  const { query } = $route;
  pageInit(query);
});
</script>

<style></style>
