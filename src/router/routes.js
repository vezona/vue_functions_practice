import home from '/src/views/home.vue';
import dropdown from '/src/views/dropdown-select.vue';
import pageChange from '/src/views/router.vue';
import beforeunload from '/src/views/beforeunload.vue';
import pinia from '/src/views/pinia.vue';
import exportJS from '/src/views/exportJS.vue';
import toggleList from '/src/views/toggleList.vue';
import regex from '/src/views/regex.vue';

export default [
  {
    // 主頁
    path: '/',
    name: 'home',
    component: home,
  },
  {
    // 下拉選單
    path: '/dropdown',
    name: 'dropdown',
    component: dropdown,
  },
  {
    // 網址上下頁
    path: '/router',
    name: 'router',
    component: pageChange,
  },
  {
    // 換頁時alert
    path: '/beforeunload',
    name: 'beforeunload',
    component: beforeunload,
  },
  
  {
    // pinia
    path: '/pinia',
    name: 'pinia',
    component: pinia,
  },
  {
    // export JS、computed、reactive 是否能合用
    path: '/exportJS',
    name: 'exportJS',
    component: exportJS,
  },
  {
    // 下拉選單收合+event.target、event.currentTarget
    path: '/toggleList',
    name: 'toggleList',
    component: toggleList,
  },
  {
    // 正則百分比、小數點互換
    path: '/regex',
    name: 'regex',
    component: regex,
  }
];
