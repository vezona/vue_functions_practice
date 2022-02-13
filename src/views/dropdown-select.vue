<template>
  <div
      class="w-95/100 flex mx-auto mb-1 text-c-dark-400 select-none"
      p="y-1 x-8"
    >
      <label class="mr-5 py-2"><span class="text-red-700" v-if="mustfill">* </span>{{title}}</label>
      <!-- 縣市 -->
      <div ref="cityContainer"
        class="w-1/3 relative cursor-pointer mr-3"
        :class="{'bg-true-gray-100':isOpen === 'city'}"
        @click="toggleList($event, 'city', cityContainer)"
      >
        <div class="border-b py-2 pl-3"             
              :class="{
              'border-true-gray-100': isOpen === 'city',
              'border-b-gray-300': !isOpen === 'city',
              }"
        >
          <span class="block truncate">
            {{ cityChoosed }}
          </span>
          <i class="absolute block top-3 right-1 text-c-dark-300 transform cursor-pointer">
            <icon-ant-design-caret-up-outlined v-if="isOpen === 'city'" />
            <icon-ant-design-caret-down-outlined v-else />
          </i>
        </div>

        <!-- items -->
        <transition name="slide">
          <div v-show="isOpen === 'city'">
            <ul class="pl-3">
              <li 
                v-for="city in cityList" 
                :key="city.val"
                class="relative mb-2"
                :class="{
                  'text-c-orange-700': city.name === cityChoosed,
                }"
                @click="cityChoosed = city.val"
              >
                <span>
                  {{city.name}}
                  <icon-akar-icons-check v-if="city.name === cityChoosed" class="absolute top-1 ml-3" />
                </span>
              </li>
            </ul>
          </div>
        </transition>
      </div>


      <!-- 區域 -->
      <div ref="distContainer"
        class="w-1/3 relative cursor-pointer"
        :class="{'bg-true-gray-100':isOpen === 'dist'}"
        @click="toggleList($event, 'dist', distContainer)"
      >
        <div class="border-b py-2 pl-3"             
              :class="{
              'border-true-gray-100': isOpen === 'dist',
              'border-b-gray-300': !isOpen === 'dist',
              }"
        >
          <span class="block truncate">
            {{ distChoosed }}
          </span>
          <i class="absolute block top-3 right-1 text-c-dark-300 transform cursor-pointer">
            <icon-ant-design-caret-up-outlined v-if="isOpen === 'dist'" />
            <icon-ant-design-caret-down-outlined v-else />
          </i>
        </div>

        <!-- items -->
        <transition name="slide">
          <div v-show="isOpen === 'dist'">
            <ul class="pl-3">
              <li 
                v-for="dist in distList" 
                :key="dist.val"
                class="relative mb-2"
                :class="{
                  'text-c-orange-700': dist.name === cityChoosed,
                }"
                @click="cityChoosed = dist.val"
              >
                <span>
                  {{dist.name}}
                  <icon-akar-icons-check v-if="dist.name === cityChoosed" class="absolute top-1 ml-3" />
                </span>
              </li>
            </ul>
          </div>
        </transition>
      </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
export default {
    setup(props, {emit}){
        // toggle
        const cityContainer = ref(null)
        const distContainer = ref(null)

        let wrapper = null;
        const isOpen = ref('');
        const toggleList = (event, val, container)=>{
            // wrapper 範圍設定為目前的 container
            wrapper = container
            isOpen.value = isOpen.value === val
            ? ''
            : val

            // 整個畫面上加一個點擊監聽事件
            window.addEventListener('click', clickHandler);
        }
        
        const clickHandler = e =>{
            // 如果點擊時的event.target 不包含在 wrapper 內，就關閉dropdown
            if(isOpen && !wrapper.contains(e.target)){
                isOpen.value = false
            }
        }
        // 選單
        const mustfill = true;
        const title = '區域';
        const cityChoosed = ref('請選擇縣市')
        const cityList = [
            {
                name: '台北', 
                val: '台北'
            },
            {
                name: '桃園', 
                val: '桃園'
            },
            {
                name: '新竹', 
                val: '新竹'
            }
        ];
        
        const distChoosed = ref('請選擇區域')
        const distList = [
            {
                name: '大安區', 
                val: '大安區'
            },
            {
                name: '中正區', 
                val: '中正區'
            }
        ];

        return {
            isOpen,
            toggleList,
            cityContainer,
            distContainer,

            // 選單
            mustfill,
            title,
            cityChoosed,
            cityList,
            distChoosed,
            distList

        }
    }

}
</script>

<style>

</style>