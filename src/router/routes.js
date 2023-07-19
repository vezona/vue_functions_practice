import home from "/src/views/home.vue";
import dropdown from "/src/views/dropdown-select.vue";
import pageChange from "/src/views/router.vue";
import beforeunload from "/src/views/beforeunload.vue";
import pinia from "/src/views/pinia.vue";
import exportJS from "/src/views/exportJS.vue";
import toggleList from "/src/views/toggleList.vue";
import regex from "/src/views/regex.vue";
import floatAndPercent from "/src/views/floatAndPercent.vue";
import routerSameComponent from "/src/views/routerSameComponent.vue";
import routerEdit from "/src/views/routerEdit.vue";
import uploadImg from "/src/views/uploadImg.vue";
import apiUploadImg from "/src/views/apiUploadImg.vue";
import directiveValidate from "/src/views/directiveValidate.vue";
import regexp from "/src/views/regexp.vue";
import dragTransition from "/src/views/dragTransition.vue";
import directive from "/src/views/directive.vue";
import cancalToken from "/src/views/cancalToken.vue";
import detectScroll from "/src/views/detectScroll.vue";
import eventListener from "/src/views/eventListener.vue";
import routerAndComputed from "/src/views/routerAndComputed.vue"
import dropdownSelect from "/src/views/dropdownSelect.vue"

export default [
  {
    // 主頁
    path: "/",
    name: "home",
    component: home,
  },
  {
    // 下拉選單
    path: "/dropdown",
    name: "dropdown",
    component: dropdown,
  },
  {
    // 網址上下頁
    path: "/router",
    name: "router",
    component: pageChange,
  },
  {
    // 換頁時alert
    path: "/beforeunload",
    name: "beforeunload",
    component: beforeunload,
  },
  {
    // pinia
    path: "/pinia",
    name: "pinia",
    component: pinia,
  },
  {
    // export JS、computed、reactive 是否能合用
    path: "/exportJS",
    name: "exportJS",
    component: exportJS,
  },
  {
    // 下拉選單收合+event.target、event.currentTarget
    path: "/toggleList",
    name: "toggleList",
    component: toggleList,
  },
  {
    // 正則百分比、小數點互換
    path: "/regex",
    name: "regex",
    component: regex,
  },
  {
    // Math 百分比、小數點互換
    path: "/floatAndPercent",
    name: "floatAndPercent",
    component: floatAndPercent,
  },
  {
    path: "/routerSameComponent",
    name: "routerSameComponent",
    component: routerSameComponent,
    children: [
      {
        // 可匯入
        path: "path1",
        name: "path1",
        component: routerEdit,
      },
      {
        // 可匯入
        path: "path2",
        name: "path2",
        component: routerEdit,
      },
    ],
  },
  {
    // 上傳圖片
    path: "/uploadImg",
    name: "uploadImg",
    component: uploadImg,
  },
  {
    // API 上傳圖片
    path: "/apiUploadImg",
    name: "apiUploadImg",
    component: apiUploadImg,
  },
  {
    // directive 驗證
    path: "/directiveValidate",
    name: "directiveValidate",
    component: directiveValidate,
  },
  {
    // regexp 驗證與computed value
    path: "/regexp",
    name: "regexp",
    component: regexp,
  },
  {
    path: "/dragTransition",
    name: "dragTransition",
    component: dragTransition,
  },
  {
    // 偵測 scroll
    path: "/detectScroll",
    name: "detectScroll",
    component: detectScroll,
  },
  {
    path: "/directive",
    name: "directive",
    component: directive,
  },
  {
    // 取消發送API
    path: "/cancalToken",
    name: "cancalToken",
    component: cancalToken,
  },
  {
    path: "/eventListener",
    name: "eventListener",
    component: eventListener
  },
  {
    path: "/routerAndComputed",
    name: "routerAndComputed",
    component: routerAndComputed
  },
  {
    path: "/dropdownSelect",
    name: "dropdownSelect",
    component: dropdownSelect
  }
];
