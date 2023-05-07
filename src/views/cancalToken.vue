<template>
  <div>
    <button class="mr-6" @click="sendRequest">發送API-getInventory</button>
    <button @click="cancelRequest">取消發送API</button>

    <div>
      <div @click="tabEvent('TabA')">TabA</div>
      <div @click="tabEvent('TabB')">TabB</div>
      <div @click="tabEvent('TabC')">TabC</div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import {sendRequest,cancelRequest,sendRequestA,sendRequestB, sendRequestC,} from "/src/JS/useCancelToken.js"

// const controller = new AbortController();
// const signal = controller.signal;

// const sendRequest = async () => {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/todos/1",
//       { signal }
//     );
//     console.log("API response:", response.data);
//   } catch (error) {
//     if (axios.isCancel(error)) {
//       console.log("API request cancelled");
//     } else {
//       console.error("API request error:", error.message);
//     }
//   }
// };

// const cancelRequest = () => {
//   controller.abort();
// };
// ===================
// axios cancalToken 的寫法，但已經要棄用了
// const request = async (config, cancelTokenSource) => {
//   config.cancelToken = cancelTokenSource.token;
//   try {
//     const res = await axios.request(config);
//     return res.data;
//   } catch (error) {
//     if (axios.isCancel(error)) {
//       console.log("Request canceled:", error.message);
//     } else {
//       console.log("Request error:", error.message);
//     }
//   }
// };

// const InventoryCaseAPIs = {
//   getPublicList: ({
//     keyword = null,
//     page = 1,
//     isAllowedRepublish = null,
//     cancelTokenSource,
//   } = {}) => {
//     return request(
//       {
//         method: "get",
//         url: `/test.json`,
//         params: {
//           page,
//           keyword,
//           canContinuePublish: isAllowedRepublish,
//         },
//       },
//       cancelTokenSource
//     );
//   },
//   getPrivateList: ({
//     keyword = null,
//     page = 1,
//     isAllowedRepublish = null,
//     cancelTokenSource,
//   } = {}) => {
//     return request(
//       {
//         method: "get",
//         url: `/test.json`,
//         params: {
//           page,
//           keyword,
//           canContinuePublish: isAllowedRepublish,
//         },
//       },
//       cancelTokenSource
//     );
//   },
//   getCloseList: ({
//     keyword = null,
//     page = 1,
//     isAllowedRepublish = null,
//     cancelTokenSource,
//   } = {}) => {
//     return request(
//       {
//         method: "get",
//         url: `/test.json`,
//         params: {
//           page,
//           keyword,
//           canContinuePublish: isAllowedRepublish,
//         },
//       },
//       cancelTokenSource
//     );
//   },
// };

// let cancelTokenSource = null;

// const sendRequest = async (apiFunc) => {
//   if (cancelTokenSource) {
//     cancelRequest();
//   }
//   cancelTokenSource = axios.CancelToken.source();
//   await apiFunc({
//     keyword: "test",
//     page: 1,
//     isAllowedRepublish: true,
//     cancelTokenSource,
//   });
// };

// const cancelRequest = () => {
//   if (cancelTokenSource) {
//     cancelTokenSource.cancel("Request canceled by the user.");
//     cancelTokenSource = null;
//   }
// };

// const sendRequestA = () => {
//   sendRequest(InventoryCaseAPIs.getPublicList);
// };

// const sendRequestB = () => {
//   sendRequest(InventoryCaseAPIs.getPrivateList);
// };

// const sendRequestC = () => {
//   sendRequest(InventoryCaseAPIs.getCloseList);
// };

// const tabEvent = (tabName) => {
//   const requestMap = {
//     TabA: sendRequestA,
//     TabB: sendRequestB,
//     TabC: sendRequestC,
//   };

//   if (requestMap.hasOwnProperty(tabName)) {
//     requestMap[tabName]();
//   } else {
//     cancelRequest();
//   }
// };

// 使用 axios 的 AbortController 改寫




const tabEvent = (tabName) => {
  const requestMap = {
    TabA: sendRequestA,
    TabB: sendRequestB,
    TabC: sendRequestC,
  };

  if (requestMap.hasOwnProperty(tabName)) {
    requestMap[tabName]();
  } else {
    cancelRequest();
  }
};
</script>

<style></style>
