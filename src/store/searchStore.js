import { defineStore } from "pinia";
import { ref, reactive, computed, nextTick } from "vue";
import { useRouter } from "vue-router";

export default defineStore("searchStore", () => {
  const searchConditions = ref({
    keyword: null,
    page: 1,
  });

  const searchCondition = reactive({
    keyword: null,
    page: 1,
  });
    
  const setQueryToSearchConditions = (query) => { 
    query.keyword && (searchConditions.value.keyword = query.keyword);
    query.keyword && (searchCondition.keyword = query.keyword);
  }
  
  const pageInit = (params) => {
    setQueryToSearchConditions(params)
  }
  return {
    searchConditions,
    searchCondition,
    pageInit,
  }

});
