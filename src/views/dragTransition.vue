<template>
  <transition-group
    transition-group
    name="drag"
    tag="div"
    class="grid w-75% gap-x-6 gap-6 grid-cols-5 inline-block"
  >
    <!-- <div class="grid w-75% gap-x-6 gap-6 grid-cols-5 inline-block"> -->
    <div
      class="rounded-sm cursor-move bg-gray-200 h-120px transition w-120px z-8 duration-100 overflow-hidden relative hover:shadow-sm hover:transform hover:scale-105"
      :class="{
        'first:(after:content-[attr(txt)]) after:bg-c-orange-500 after:bg-opacity-80 after:h-5 after:text-center after:text-sm after:text-white after:bottom-0 after:left-2 after:w-7/8 after:z-2 after:absolute':
          typeof casePhotoList[0] === 'string',
      }"
      txt="封面照"
      v-for="(caseImg, idx) in casePhotoList"
      :key="caseImg"
      @dragstart="dragStart($event, idx)"
      @dragover.stop.prevent="false"
      @dragend="dragEnd"
      @drop.prevent="dragArrange($event, idx)"
    >
      <div
        class="rounded-md cursor-pointer h-20px text-white top-0 right-0 w-20xp absolute after:bg-c-dark-300 after:h-20px after:opacity-60 after:top-0 after:right-0 after:w-20px after:z-1 after:content-[attr(after)] after:absolute"
        @click="removeCurrImg(idx, casePhotoList)"
      >
        <icon-mdi-close
          class="text-base top-0 right-0 z-2 align-top absolute"
        />
      </div>
      <img
        class="h-full object-cover w-full phone:absolute phone:z-1"
        :src="caseImg"
      />
    </div>
    <!-- </div> -->
  </transition-group>

  <p @click="test" class="border mx-auto my-8 w-1/4">replace object</p>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const casePhotoList = ref([
      "https://hp-pic.houseprice.tw/20220913/014dcc072b9140cfa329a2b869c42278.JPG",
      "https://hp-pic.houseprice.tw/20220913/b42aabdc459e4526b562f075d974c39c.JPG",
      "https://hp-pic.houseprice.tw/20220913/1c5fd1eeba8543598d15f055f71ed8ba.jpg",
      //   "https://hp-pic.houseprice.tw/20220913/f4707be3c1cd4c3da5cf92cdb9ae0696.jpg",
      {},
    ]);

    const isSetArrange = ref(false);

    const dragStart = (e, idx) => {
      isSetArrange.value = true;
      //儲存現在抓的idx
      e.dataTransfer.setData("Text", idx);
    };

    const dragEnd = (e) => {
      isSetArrange.value = false;
    };

    const dragArrange = (e, idx) => {
      //拖曳順序
      let arr = Array.from(casePhotoList.value);
      const currDragIdx = e.dataTransfer.getData("Text"); // dragStart 存數據
      const currDragImg = arr.splice(currDragIdx, 1);
      arr.splice(idx, 0, currDragImg[0]); // 陣列指定位置後面新增內容
      casePhotoList.value = arr;
    };

    const removeCurrImg = (idx, imgList) => {
      imgList.splice(idx, 1);
    };

    const test = () => {
      casePhotoList.value[3] =
        "https://hp-pic.houseprice.tw/20220913/f4707be3c1cd4c3da5cf92cdb9ae0696.jpg";
    };

    return {
      casePhotoList,
      isSetArrange,
      dragStart,
      dragEnd,
      dragArrange,
      removeCurrImg,

      test,
    };
  },
};
</script>

<style>
.drag-move {
  transition: transform 0.3s;
}
</style>
