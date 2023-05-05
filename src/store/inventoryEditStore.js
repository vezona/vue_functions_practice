import { defineStore } from 'pinia';

export default defineStore('inventoryEditStore', {
  state: () => {
    return {
      conditions: {
        baseInfo: {
          alley: null,
          no: null,
        },
      },
    };
  },
  getters: {
  },
  actions: {
    // 更新欄位資料
    updateConditions(objName, itemKey, val) {
      const $store = this;
      $store.conditions[objName][itemKey] = val;
    },

  },
});
