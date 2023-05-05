<template>
<div>
    <p><router-link to="/routerSameComponent/path1">to 1</router-link></p>
    <p><router-link to="/routerSameComponent/path2">to 2</router-link></p>
    <!-- {{fullPath}} -->
</div>
  <router-view v-slot="{ Component }" :key="fullPath">
    <component :is="Component" />
  </router-view>
</template>

<script>
import {useRouter, useRoute} from 'vue-router';
export default {
    setup(){
        const $Router = useRouter();
        const $Route = useRoute();

        return{
            fullPath: $Route.fullPath

        }
    }

}
</script>

<style>

</style>