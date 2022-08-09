<template>
<label for="" class="mr-2">填寫</label>
<input type="text" class="border border-4" v-model="purpose">
<p>{{conditions}}</p>

<input type="text" class="border border-4" v-model="conditions.name">

<p>{{store.order}}</p>
<input type="text" :value="order" @change="order = $event.target.value">

<!-- <br>
<input type="checkbox" id="unit" v-model="unitConvert">
<label for="unit">Unit</label>
<p>{{store.mainPin}}</p>
<input type="text" name="" id="" class="border border-4" 
    :value="store.mainPin.value"
    @change="store.main.value = $event.target.value"

> -->

  
</template>

<script>
import { ref, reactive, watch, watchEffect, computed } from 'vue';
import { useStore } from '../store/index';
import { storeToRefs } from 'pinia';

export default {
    setup(){
        const store = useStore();
        // const { purpose } = storeToRefs(store);

        // 這個方法不連動，只是把 pinia 的值帶給 conditions，當修改 conditions.name 時不會寫進 pinia 內
        // const conditions = reactive({});
        // // 根據型態設定要用的資料表
        // watchEffect(() => {
        //     if (purpose.value === '土地') {
        //       Object.assign(conditions, store.land)
        //     } else if (purpose.value === '車位') {
        //       Object.assign(conditions, store.parking)
        //     } else {
        //       Object.assign(conditions, store.house)
        //     }
        // });

        const { purpose, house, land, parking, unitConvert } = storeToRefs(store);

        const conditions = ref({});
        // 根據型態設定要用的資料表，因為已經轉成 storeToRefs 的 ref 物件，所以要加 value
        watchEffect(() => {
            if (purpose.value === '土地') {
                unitConvert.value = false;
                conditions.value = land.value
            } else if (purpose.value === '車位') {
                unitConvert.value = false;
                conditions.value = parking.value
            } else {
                unitConvert.value = false;
                conditions.value = house.value
            }
        });

        const order = computed({
            get: () => store.order,
            set: (val) => { }
        })

        // watch(unitConvert, ()=>{
        //     store.main.value = null
        // })


        return{
            purpose,
            // unitConvert,
            conditions,
            store,
            // order

        }
    }

}
</script>

<style>

</style>