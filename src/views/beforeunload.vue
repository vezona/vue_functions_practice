<template>
<div>離開此頁時alert (SPA該如何使用)</div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
export default {
    setup(props, {emit}){

    // 離開網頁時alert
    window.addEventListener("beforeunload", function(e) {
      e.preventDefault();
      e.returnValue = ''
     });
  
        return {
        }
    }

}
</script>

<style>

</style>