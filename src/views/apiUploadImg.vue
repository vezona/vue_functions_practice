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
    pictureList: Loading: {{ loading }}
    <span v-for="i in photoList" :key="i">
      <img :src="i" class="h-100px mx-3 w-150px" />
    </span>
  </div>
  <p>photoList {{ photoList }}</p>
</template>

<script>
import { ref, computed } from "vue";
import { useAPIUpload } from "/src/JS/useAPIUpload.js";
export default {
  setup() {
    const photoList = ref([]);
    const { uploadImg, loading } = useAPIUpload();

    return {
      photoList,
      uploadImg,
      loading,
    };
  },
};
</script>

<style></style>
