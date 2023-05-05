<template>
  <p>Computed 物件</p>
  <div>
    <div class="mb-3">
      <input
        type="text"
        v-model="alleyFill"
        class="border rounded border-gray-400 py-1 px-2"
      />
      <label class="ml-2">巷</label>
    </div>

    <div>
      <input
        type="text"
        class="border rounded border-gray-400 py-1 px-2"
        v-only-integers
        v-model="noFill"
      />
      <label class="ml-2">號</label>
    </div>

    <div class="mt-5">
      {{ conditions.baseInfo }}
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useInventoryEditStore } from "/src/store";

export default {
  setup() {
    const $useInventoryEditStore = useInventoryEditStore();
    const { updateConditions } = $useInventoryEditStore;
    const conditions = computed(() => $useInventoryEditStore.conditions);

    const alleyFill = computed({
      get: () => conditions.value.baseInfo.alley,
      set: (val) => updateConditions("baseInfo", "alley", val),
    });

    const noFill = computed({
      get: () => conditions.value.baseInfo.no,
      set: (val) => updateConditions("baseInfo", "no", val),
    });
    return {
      alleyFill,
      noFill,
      conditions,
    };
  },
};
</script>

<style></style>
