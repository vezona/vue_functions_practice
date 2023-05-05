<template>
  <div>
    <div>
      <label for="phone" class="mr-3">Phone</label>
      <input
        type="text"
        v-model="phone"
        v-validate="{
          pattern: /^\w{5,10}$/,
          errorMsg: '長度必須介於5-10字之內',
          noticeTarget: '[phone-error-msg]',
        }"
        class="border rounded border-gray-400 py-1 px-2"
      />
      <div phone-error-msg class="mt-2 text-red-500"></div>
    </div>
    <div class="mt-2">
      <label for="name" class="mr-3">Name</label>
      <input
        type="text"
        v-model="name"
        v-validate="{
          pattern: /^\w{5,10}$/,
          errorMsg: '長度必須介於5-10字之內',
          noticeTarget: '[name-error-msg]',
        }"
        class="border rounded border-gray-400 py-1 px-2"
      />
      <div name-error-msg class="mt-2 text-red-500"></div>
    </div>

    <div class="mt-5">
      <button
        type="buutton"
        class="border rounded border-dark-300 px-4"
        @click="submit"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  setup() {
    const name = ref("aa");
    const phone = ref("");
    const submit = () => {
      document.getAttribute("v-validate").dispatchEvent();
    };

    return {
      name,
      phone,
      submit,
    };
  },
};
</script>

<style></style>
