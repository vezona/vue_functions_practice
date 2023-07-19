<script setup>
import { ref, computed, watch, onMounted, nextTick } from "vue";
import multiToggle from "/src/compose/useMultiToggle";

const props = defineProps({
  isShowSelectOptions: {
    type: Boolean,
    defalut: false,
  },
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

const emit = defineEmits([
  "update:time",
  "update:hours",
  "update:minutes",
  "update:isShowSelectOptions",
]);

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

const elRef = ref(null);
const initPosition = ref(0);
const currentPosition = ref(0);
const marginTop = ref(0);
const padding = 8; //父層元素的padding
onMounted(async () => {
  nextTick(() => {
    if (elRef.value) {
      initPosition.value = elRef.value.getBoundingClientRect().bottom;
      console.log("init", initPosition.value);
    }
  });
});

//是否展開下拉選單
watch(currentSelect, () => {
  emit("update:isShowSelectOptions", currentSelect.value === "timePicker");

  if (currentSelect.value === "timePicker" && elRef.value) {
    currentPosition.value = elRef.value.getBoundingClientRect().bottom;

    console.log("curr", currentPosition.value);
    console.log("diff", currentPosition.value - initPosition.value);
    if (currentPosition.value - initPosition.value > 0) {
      marginTop.value = 0;
    } else {
      marginTop.value = currentPosition.value - initPosition.value;
    }
  }
});
</script>
<template>
  <div ref="elRef" class="w-30">
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
        class="border bg-gray-100 shadow-lg z-20"
        :class="[isShowSelectOptions ? 'fixed w-30' : 'absolute w-full top-10']"
        :style="{ marginTop: marginTop + 'px' }"
      >
        <ul
          class="max-h-50 pl-3 overflow-y-scroll scroll-wrap-test select-none"
        >
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

<style scoped>
.scroll-wrap-test {
  --scrollbar-track: initial;
  --scrollbar-thumb: initial;
  scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
  overflow: overlay;
  scrollbar-width: thin;
  --scrollbar-thumb: #b5a99d;
  --scrollbar-track: #e9ecef;
  overflow-y: auto;
  overflow-x: hidden;
}

.scroll-wrap-left-test {
  --scrollbar-track: initial;
  --scrollbar-thumb: initial;
  scrollbar-color: var(--scrollbar-thumb) var(--scrollbar-track);
  overflow: overlay;
  scrollbar-width: thin;
  --scrollbar-thumb: #b5a99d;
  --scrollbar-track: #e9ecef;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
