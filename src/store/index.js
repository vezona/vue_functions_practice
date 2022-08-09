import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
    state: () => {
        return {
            purpose: '住宅',
            unitConvert: false,
            house: {
                name: '房屋A'
            },
            parking: {
              name: '車位A'
            },
            land: {
              name: '土地A'
            },
            main: {
              value: 'aaaa'
            }
        }
    },
    getters: {
        order: (state) => {
            switch (state.purpose) {
                case '住宅':
                  return 1;
                case '車位':
                  return 2;
                case '土地':
                  return 3;
            }
        },
        mainPin: (state) => {
            if (state.unitConvert) {
                // state.main.value = '';
                return {
                    ...state.main,
                    required: true,
                }
            } else {
                // state.main.value = '';
                return {
                    ...state.main,
                    required: false,
                } 
            }
        },

    }
  })