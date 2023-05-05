<template>
  <div>
    <p>{{$route.name}}</p>

    <p v-if="$route.name==='path2'">show</p>
  </div>
</template>

<script>
import {toRefs} from 'vue'
import {useRouter, useRoute, onBeforeRouteUpdate} from 'vue-router';
export default {
    setup(){
        const $Router = useRouter();
        const $Route = useRoute();
        console.log($Route);

    onBeforeRouteUpdate((to, from) => {
      console.log('update', to);
    });



        return {

        }
    },
    async beforeRouteEnter(to,from){
        console.log('to',to);

        // to.name==='path2'? next('/path2'): next()
        // to.name==='path2'? console.log('2'): console.log(1);

        // next(vm=>{
        //     console.log(vm.name);
        //     // vm.name='path2'
        //     if(to.name==='path2') vm.name='path2'
        // })

    }

}
</script>

<style>

</style>