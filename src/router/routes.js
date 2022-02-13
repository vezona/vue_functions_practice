import home from '/src/views/home.vue';
import dropdown from '/src/views/dropdown-select.vue';
import pageChange from '/src/views/router.vue';
import beforeunload from '/src/views/beforeunload.vue';

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
  }
];
