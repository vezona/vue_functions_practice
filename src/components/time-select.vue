<script setup>
import { ref, computed } from "vue";
import multiToggle from "/src/compose/useMultiToggle";

const props = defineProps({
  time: {
    type: String,
    required: true,
  },
  hours: {
    type: Number,
    required: true,
  },
  minutes: {
    type: Number,
    required: true,
  },
});

const { currentSelect, multiToggleList } = multiToggle();

const hours = Array.from({ length: 24 }, (_, i) =>
  i.toString().padStart(2, "0")
);
const minutes = ["00", "30"];
const timeList = ref([]);

for (let i = 0; i < hours.length; i++) {
  const hoursToNum = parseInt(hours[i], 10);
  for (let j = 0; j < minutes.length; j++) {
    const minutesToNum = parseInt(minutes[j], 10);
    timeList.value.push({
      key: `${hours[i]}:${minutes[j]}`,
      value: {
        hours: hoursToNum,
        minutes: minutesToNum,
      },
    });
  }
}

const emit = defineEmits(["update:time", "update:hours", "update:minutes"]);

const choosedTime = computed({
  get: () => props.time.replace(/\s*/g, ""),
  set: (val) => emit("update:time", val),
});
const choosedHours = computed({
  get: () => props.hours,
  set: (val) => emit("update:hours", val),
});
const choosedMinutes = computed({
  get: () => props.minutes,
  set: (val) => emit("update:minutes", val),
});

const choosedText = computed(() => {
  const selectedItem = timeList.value.find((i) => i.key === choosedTime.value);
  return selectedItem ? selectedItem.key : "選擇時間";
});

const handleChooseTime = (item) => {
  choosedTime.value = item.key;
  choosedHours.value = item.value.hours;
  choosedMinutes.value = item.value.minutes;
};
</script>
<template>
  <div class="w-30">
    <div
      data-item-id="caseType"
      class="cursor-pointer text-center relative"
      :class="{ 'bg-gray-100': currentSelect === 'timePicker' }"
      @click="multiToggleList($event, 'timePicker')"
    >
      <div class="rounded bg-gray-100 py-2 relative">
        <span class="block truncate">{{ choosedText }}</span>
      </div>

      <!-- items -->
      <div
        v-show="currentSelect === 'timePicker'"
        class="border bg-gray-100 shadow-lg w-full py-2 top-10 z-20 absolute"
      >
        <ul class="pl-3 overflow-y-scroll scroll-wrap !max-h-60">
          <li
            v-for="item in timeList"
            :key="item.key"
            class="border-b cursor-pointer border-gray-300 mr-2 py-2"
            :class="{ 'text-c-orange-700 font-bold': item.key === choosedTime }"
            @click="handleChooseTime(item)"
          >
            <span>
              {{ item.key }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
