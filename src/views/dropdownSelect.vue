<template>
  <div
    class="border flex border-gray-700 w-full justify-center overflow-y-auto scroll-wrap"
    :class="[false ? 'overflow-y-auto scroll-wrap' : 'relative']"
  >
    <section class="rounded flex h-50vh w-full py-5 justify-center">
      <ul class="basis-9/16">
        <li
          v-for="(
            i, index
          ) in caseAutoRefreshList.autoRefreshSettingInfoSystemGift"
          :key="i.recordId"
          class="flex py-2 items-center first:pt-0"
        >
          <span class="text-right pr-2 text-c-dark-500 w-7">{{
            `${index + 1}.`
          }}</span>
          <time-select
            v-model:time="i.dailyRefreshTime"
            v-model:hours="i.regularUpdateTimeHour"
            v-model:minutes="i.regularUpdateTimeMin"
          />
          <div class="pl-2 text-c-dark-500">
            <span class="text-sm pl-1"> 今天到期 </span>
          </div>
        </li>

        <select name="pets" id="pet-select">
          <option value="">--Please choose an option--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="hamster">Hamster</option>
          <option value="parrot">Parrot</option>
          <option value="spider">Spider</option>
          <option value="goldfish">Goldfish</option>
        </select>
      </ul>

      u
    </section>
  </div>

  <!-- ==== -->
  <div class="cursor-pointer mt-10" @click="iswrap = !iswrap">
    Click {{ iswrap }}
  </div>
  <div
    class="bg-gray-200 h-20vh mt-10 w-full"
    :class="[
      iswrap ? 'overflow-y-auto scroll-wrap' : 'relative overflow-hidden',
    ]"
  >
    <div
      class="mx-auto bg-pink-300 h-40vh w-100px"
      :class="[iswrap ? '' : 'top-0 left-1/2 absolute']"
    >
      outerWrap
      <p
        class="mx-auto bg-blue-300 h-40vh w-30px"
        :class="[iswrap ? '' : 'fixed']"
      >
        Inner Wrap
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
const iswrap = ref(true);
const caseAutoRefreshList = ref({
  autoRefreshSettingInfoSystemGift: [
    {
      dailyRefreshTime: " 10 : 00",
      regularUpdateTimeHour: 10,
      regularUpdateTimeMin: 0,
      expiredDateTime: "2023-10-08T23:59:59.999+08:00",
      buyDate: "2023-06-21T18:16:56.867+08:00",
      autoRefreshSource: 0,
      recordId: "5779fb41-98d5-4e61-9de5-8f3c15ddb6f8",
    },
    {
      dailyRefreshTime: " 10 : 00",
      regularUpdateTimeHour: 10,
      regularUpdateTimeMin: 0,
      expiredDateTime: "2023-10-08T23:59:59.999+08:00",
      buyDate: "2023-06-21T18:16:56.867+08:00",
      autoRefreshSource: 0,
      recordId: "5779fb41-98d5-4e61-9de5-8f3c15ddb6f8",
    },
    {
      dailyRefreshTime: " 10 : 00",
      regularUpdateTimeHour: 10,
      regularUpdateTimeMin: 0,
      expiredDateTime: "2023-10-08T23:59:59.999+08:00",
      buyDate: "2023-06-21T18:16:56.867+08:00",
      autoRefreshSource: 0,
      recordId: "5779fb41-98d5-4e61-9de5-8f3c15ddb6f8",
    },
    {
      dailyRefreshTime: " 10 : 00",
      regularUpdateTimeHour: 10,
      regularUpdateTimeMin: 0,
      expiredDateTime: "2023-10-08T23:59:59.999+08:00",
      buyDate: "2023-06-21T18:16:56.867+08:00",
      autoRefreshSource: 0,
      recordId: "5779fb41-98d5-4e61-9de5-8f3c15ddb6f8",
    },
    {
      dailyRefreshTime: " 10 : 00",
      regularUpdateTimeHour: 10,
      regularUpdateTimeMin: 0,
      expiredDateTime: "2023-10-08T23:59:59.999+08:00",
      buyDate: "2023-06-21T18:16:56.867+08:00",
      autoRefreshSource: 0,
      recordId: "5779fb41-98d5-4e61-9de5-8f3c15ddb6f8",
    },
    {
      dailyRefreshTime: " 10 : 00",
      regularUpdateTimeHour: 10,
      regularUpdateTimeMin: 0,
      expiredDateTime: "2023-10-08T23:59:59.999+08:00",
      buyDate: "2023-06-21T18:16:56.867+08:00",
      autoRefreshSource: 0,
      recordId: "5779fb41-98d5-4e61-9de5-8f3c15ddb6f8",
    },
    {
      dailyRefreshTime: " 10 : 00",
      regularUpdateTimeHour: 10,
      regularUpdateTimeMin: 0,
      expiredDateTime: "2023-10-08T23:59:59.999+08:00",
      buyDate: "2023-06-21T18:16:56.867+08:00",
      autoRefreshSource: 0,
      recordId: "5779fb41-98d5-4e61-9de5-8f3c15ddb6f8",
    },
    {
      dailyRefreshTime: " 10 : 00",
      regularUpdateTimeHour: 10,
      regularUpdateTimeMin: 0,
      expiredDateTime: "2023-10-08T23:59:59.999+08:00",
      buyDate: "2023-06-21T18:16:56.867+08:00",
      autoRefreshSource: 0,
      recordId: "5779fb41-98d5-4e61-9de5-8f3c15ddb6f8",
    },
    {
      dailyRefreshTime: " 10 : 00",
      regularUpdateTimeHour: 10,
      regularUpdateTimeMin: 0,
      expiredDateTime: "2023-10-08T23:59:59.999+08:00",
      buyDate: "2023-06-21T18:16:56.867+08:00",
      autoRefreshSource: 0,
      recordId: "5779fb41-98d5-4e61-9de5-8f3c15ddb6f8",
    },
  ],
});
</script>
