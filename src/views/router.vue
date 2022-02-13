<template>
<div>router 上下頁</div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
export default {
    setup(props, {emit}){
     const $route = useRoute();
     const $router = useRouter();

    // 網址換頁
    // const setUrl = () => {
    //     const { query, name } = $route;
    //     if (name === "claim-list") {
    //       let filterUrlParams =  Object.entries(conditions).filter(([key, value]) => value && value !== '');
    //       let urlParams = Object.fromEntries(filterUrlParams);
    //       $router.push({
    //         path: '/house-claim',
    //         query: {
    //           ...urlParams,
    //           page: currentPage.value
    //           }
    //       })
    //     }
    // }

    // 判斷上一頁來源, highlight
    // const lastFromPageId = $route.meta.scrollPos.fromPageId || null;
        return {
        }
    }

}
</script>

<style>

</style>