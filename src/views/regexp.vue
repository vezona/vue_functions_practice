<template>
  <p>Computed 物件</p>
  <div>
    <input
      type="text"
      v-model="alleyFill"
      class="border rounded border-gray-400 py-1 px-2"
    />
    <label for="">巷</label>

    <p>alley {{ alley }}</p>
    <p>alleyFill {{ alleyFill }}</p>
    <br />
    <input
      type="text"
      v-model="noFill"
      class="border rounded border-gray-400 py-1 px-2"
    />
    <label for="">No</label>

    <p>noFill {{ noFill }}</p>
  </div>

  <div class="border-t border-gray-700 my-2 py-4">
    <p class="">Ref 物件</p>
    <input
      type="text"
      v-model="name"
      class="border rounded border-gray-400 py-1 px-2"
    />
    <label for="">名</label>

    <p>name {{ name }}</p>
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
export default {
  setup() {
    const regex = /[^\d\-]*/g;

    const alley = ref();
    const alleyFill = computed({
      get: () => {
        console.log("get", alley.value);
        return alley.value;
      },
      set: (val) => {
        console.log("set", val);
        val = val ? val.replace(regex, "") : null;
        updateCondition(alley, val);
      },
    });

    const no = ref();
    const noFill = computed({
      get: () => no.value,
      set: (val) => updateCondition(no, val),
    });

    const updateCondition = (obj, val) => {
      console.log("update", val);
      obj.value = val;
    };

    // watch([alleyFill, no], () => {
    //   [alleyFill, no].forEach((i) => {
    //     i.value = i.value?.replace(/[^\d\-]*/g, "");
    //   });
    //   //   alleyFill.value = alleyFill.value?.replace(/[^\d\-]*/g, "");
    // });

    // =========
    const name = ref("");
    watch(name, () => {
      name.value = name.value.replace(/[^\d\-]*/g, "");
    });

    return {
      alley,
      alleyFill,
      name,
      noFill,
    };
  },
};
</script>

<style></style>
