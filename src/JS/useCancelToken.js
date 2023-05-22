import { InventoryCaseAPIs } from "/src/JS/cancelTokenApis.js"

let cancelTokenSource = null;
export const sendRequest = async (apiFunc) => {
  if (cancelTokenSource) {
    cancelRequest();
  }
  const controller = new AbortController();
  cancelTokenSource = controller;
  return await apiFunc({
    keyword: "test",
    page: 1,
    isAllowedRepublish: true,
    signal: controller.signal,
  });
};

export const cancelRequest = () => {
  if (cancelTokenSource) {
    cancelTokenSource.abort();
    cancelTokenSource = null;
  }
};

export const sendRequestA = async () => {
  return sendRequest(InventoryCaseAPIs.getPublicList);
};

export const sendRequestB = () => {
  return sendRequest(InventoryCaseAPIs.getPrivateList);
};

export const sendRequestC = () => {
  return  sendRequest(InventoryCaseAPIs.getCloseList);
};
