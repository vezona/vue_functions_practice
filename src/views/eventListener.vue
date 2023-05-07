<template>
 <div
    class="flex mb-6 grid grid-cols-12 items-center relative select-none"
    :class="{ 'text-c-red-700': requiredList.includes('purPoseName') }"
  >
    <div class="flex col-span-4 items-center phone:(col-span-12)">
      <p class="text-right mr-4 w-26 phone:(w-22 text-left) "><span class="text-c-red-700">*</span>用途</p>
      <div
        ref="el_purPoseName"
        class="cursor-pointer flex-grow relative"
        :class="{ 'bg-trueGray-100': currentSelect === 'use' }"
        @click="toggleList($event, 'use', el_purPoseName)"
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
      class="text-sm pl-5 text-c-red-700 col-span-8 select-none phone:(col-span-12 pl-26 mt-2) "
    >
      *{{ purPoseValidateList['purPoseName'].msg }}
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
import useToggle from '/src/JS/useToggle';
export default {
    setup(){
        const el_purPoseName = ref(null);
        const requiredList = ref([]);
        const usageList = [{
         Key: '1', Value:'1'
        },
        {
         Key: '2', Value:'2'
        },
        {
         Key: '3', Value:'3'
        }]
        const {toggleList, currentSelect} = useToggle();

        const purposeChoosed = ref('1')
        

        return{
            el_purPoseName,
            requiredList,
            usageList,
            toggleList,
            currentSelect,
            purposeChoosed

        }
    }

}
</script>

<style>

</style>