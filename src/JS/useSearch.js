// import qs from 'qs';
// import request from '/src/utils/request';
import { ref, reactive, watchEffect, computed, toRefs } from 'vue';
import $router from '/src/router/';

// 找 XX
// import searchOptions from './searchOptions';
// 原始搜尋欄位
import { searchConditionDataSet } from './searchConditionDataSet';

const deepCloneObj = obj => {
  return JSON.parse(JSON.stringify(obj));
};


export const useSearch = () => {
    const { searchConditionCity, searchConditionMap, searchConditionCommon } = searchConditionDataSet();
    const isMap = ref(false);
    const mapDataSet = reactive(deepCloneObj(searchConditionMap));
    const cityDataSet = reactive(deepCloneObj(searchConditionCity));
    const commonDataSet = reactive(deepCloneObj(searchConditionCommon));

    // 共用搜尋條件
    const searchConditions = computed(() => {
        return isMap.value
        ? {...mapDataSet, ...commonDataSet}
        : {...cityDataSet, ...commonDataSet}
        
    });
    
    const a = deepCloneObj(searchConditions.value)

    // router 撈參數
    const setParamsConds = paramsObj => {
        // const params =
        // paramsObj && Object.keys(paramsObj).length === 0 ? deepCloneObj(searchConditions) : deepCloneObj(paramsObj);

        for (let i in paramsObj) {
            if (i.includes('selectedRegion')) {
                // ['selectedRegion', 'bottomRight', 'lat']
                const keys = i.split('.');
                console.log(keys.map(d=>[d]));
                // console.log(searchConditions.value[keys[0]][keys[1]][keys[2]]);
                // array to nestObj
                // let nestObj = keys.reverse().reduce((res, key) => ({ [key]: res }), {});
                
            
                
            } else {
                searchConditions.value[i] = paramsObj[i];
            }
        }

        // console.log(searchConditions);
        return searchConditions;
  };
    
    return {
        isMap,
        searchConditions,
        mapDataSet, 
        cityDataSet,
        commonDataSet,
        setParamsConds
    }

}