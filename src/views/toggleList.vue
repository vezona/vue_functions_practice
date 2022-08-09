<template>
  <div
    class="flex mb-6 grid grid-cols-12 items-center relative select-none"
    :class="{ 'text-c-red-700': requiredList.includes('purPoseName') }"
  >
    <div class="flex col-span-4 items-center ">
      <p class="text-right mr-4 text-left w-26 phone:(w-22 "><span class="text-c-red-700">*</span>用途</p>
      <div
        ref="el_purPoseName"
        class="cursor-pointer flex-grow relative"
        :class="{ 'bg-trueGray-100': currentSelect === 'use' }"
        @click="toggleList($even, 'use', el_purPoseName)"
      >
        <div
          class="border-b py-2 pl-3 relative"
          :class="{
            'border-trueGray-100': currentSelect === 'use',
            'border-b-gray-300': currentSelect !== 'use',
          }"
        >
          <span class="block truncate">{{ purposeChoosed || '請選擇用途' }}</span>
          <i class="cursor-pointer transform top-3 right-1 text-c-dark-300 absolute block">
            <icon-ant-design-caret-up-outlined v-if="currentSelect === 'use'" />
            <icon-ant-design-caret-down-outlined v-else />
            <!-- <icon-ant-design-caret-up-outlined v-if="currentSelect === 'use'"></icon-ant-design-caret-up-outlined>
          <icon-ant-design-caret-down-outlined /> -->
          </i>
        </div>

        <!-- items -->
        <transition name="slide">
          <div v-show="currentSelect === 'use'" class="bg-trueGray-100 w-full z-20 absolute">
            <ul class="pl-3">
              <li
                v-for="item in usageList"
                :key="item.Key"
                class="mb-2 relative"
                :class="{ 'text-c-orange-700': item.Value === purposeChoosed }"
                @click="purposeChoosed = item.Value"
              >
                <span>
                  {{ item.Value }}
                  <icon-akar-icons-check v-if="item.Value === purposeChoosed" class="ml-3 top-1 absolute" />
                </span>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>



    
    <div
      v-if="requiredList.includes('purPoseName')"
      class="mt-2 text-sm pl-5 pl-26 text-c-red-700 col-span-8 select-none phone:(col-span-12 "
    >
      *wrong
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
import multiToggle from '/src/JS/useToggle';
export default {
    setup(){
        const el_purPoseName = ref(null);
        const requiredList = ref([]);
        const { currentSelect, toggleList } = multiToggle();

        const purposeChoosed = ref('土地');
        const usageList = [{Key: '土地', Value:'土地'}, {Key: '車位', Value:'車位'}]


        return {
          el_purPoseName,
          requiredList,
          currentSelect,
          toggleList,
          purposeChoosed,
          usageList
        }
    }

}
</script>

<style>

</style>