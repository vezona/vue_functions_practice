<template>
  <div>
    <label for="">keyword</label>
    <input
      type="text"
      class="border rounded-md border-gray-300 my-3 ml-4 py-1 px-2"
      placeholder="請輸入"
      v-model.trim="searchConditions.keyword"
    />

    <input
      type="text"
      class="border rounded-md border-gray-300 my-3 ml-4 py-1 px-2"
      placeholder="請輸入"
      v-model.trim="searchCondition.keyword"
    />
    <!--   -->
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useSearchStore } from "/src/store";

const $route = useRoute();
const $router = useRouter();

const $useSearchStore = useSearchStore();
const searchConditions = computed(() => $useSearchStore.searchConditions);
const searchCondition = computed(() => $useSearchStore.searchCondition);
console.log(searchCondition);
</script>

<style></style>
