<template>
  <div>
    上傳圖片
    <input
      ref="uploadInput"
      type="file"
      @change="uploadImg($event, photoList)"
      multiple
    />
  </div>
  <div class="border flex border-dark-50 m-2 min-h-100 p-2">
    pictureList:
    <span v-for="i in photoList" :key="i">
      loading: {{ i.loading }}
      <img :src="i.file" class="h-100px mx-3 w-150px" />
    </span>
  </div>
  <p>photoList {{ photoList }}</p>

  <div class="mt-3">
    <button
      type="button"
      @click="clearPics"
      class="border rounded-md border-dark-500 p-2"
    >
      Clear Pic
    </button>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useUpload } from "/src/JS/uploadImg.js";
export default {
  setup() {
    const photoList = ref([]);
    const { uploadImg } = useUpload();

    const uploadInput = ref(null);

    const clearPics = () => {
      photoList.value.length = 0;
      uploadInput.value.value = null;
      console.log(uploadInput.value.value);
    };

    return {
      photoList,
      uploadImg,
      clearPics,
      uploadInput,
    };
  },
};
</script>

<style></style>
