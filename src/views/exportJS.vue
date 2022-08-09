<template>
<div>
    <p>
        <label for="isMap">isMap</label>
        <input type="checkbox" id="isMap" v-model="isMap"></p>
        
    <p>{{searchConditions}}</p>
    <button type="button" @click="changeLatLng">change latlng</button>
    <p></p>
    <button type="button" @click="changeCity">change city</button>
    <br>
    <button type="button" @click="setCurrentPage">set Router</button>
</div>
  
</template>

<script>
import { ref, reactive, toRefs, watchEffect } from 'vue';
import { useSearch } from './../JS/useSearch';
import { useRouter, useRoute } from 'vue-router';

export default {
    setup() {
        const $route = useRoute();
        const $router = useRouter();
        const $useSearch = useSearch();
        const {searchConditions, isMap, mapDataSet, cityDataSet, commonDataSet, setParamsConds} = $useSearch;
  

        const changeLatLng = ()=>{
            mapDataSet.selectedRegion.bottomRight.lat = 1211;
        }

        const changeCity = ()=>{
             cityDataSet.city = '台北市'
        }

    const traverseAndFlatten = (nestObj,targetObj, flattenedKey)=>{
        for(let key in nestObj){
            let newKey;
            if(nestObj.hasOwnProperty(key)){
              newKey = flattenedKey?  `${flattenedKey}.${key}`: key;
            }

            const value = nestObj[key];
            if (typeof value === "object") {
                traverseAndFlatten(value, targetObj, newKey);
            } else {
                targetObj[newKey] = value;
            }
        }
    }

    const getListCondsParams = paramsObj => {
      const params = paramsObj ? { ...paramsObj } : { ...searchConditions.value };
            for (let q in params) {
                if(typeof(params[q]) === 'object'){
                    for(let key in params[q]){
                        for (let val in params[q][key]){
                            if(!params[q][key][val]) delete params[q][key][val]
                        }
                    }
                } else {
                   if (!params[q]) delete params[q];
                }
        }
        // 區域查找預設台北市
        // params.city = isMap.value === false && !params.brLat ? '台北市' : params.city;
        let flattenedObject = {};
        traverseAndFlatten(params, flattenedObject);
        return flattenedObject
    };

   const setCurrentPage = value => {
    searchConditions.value.page = +value;
    $router.push({
      path: '/exportJS',
      query: {
        ...getListCondsParams(),
      },
    });
  };


      // 地圖、區域撈網址切換
    watchEffect(async () => {
      const { query, name } = $route;
        // 判斷是區域或地圖搜尋模式
        if (Object.keys(query).length === 0) {
          isMap.value = false;
        } else {
          if (query.city) {
            isMap.value = false;
          } else {
            isMap.value = true;
          }
      }

      setParamsConds(query)
    });



        return {
            isMap,
            searchConditions,
            ...toRefs(mapDataSet),
            ...toRefs(cityDataSet),
             ...toRefs(commonDataSet),
            changeLatLng,
            changeCity,
            // router
            getListCondsParams,
            setCurrentPage

        }

    }

}
</script>

<style>

</style>