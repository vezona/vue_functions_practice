import {request} from "/src/JS/request.js"

export const InventoryCaseAPIs = {
    getPublicList: ({
      keyword = null,
      page = 1,
      isAllowedRepublish = null,
      signal,
    } = {}) => {
      return request(
        {
          method: "get",
          url: `/test.json`,
          params: {
            page,
            keyword,
            canContinuePublish: isAllowedRepublish,
          },
        },
        signal
      );
    },
    getPrivateList: ({
      keyword = null,
      page = 1,
      isAllowedRepublish = null,
      signal,
    } = {}) => {
      return request(
        {
          method: "get",
          url: `/test.json`,
          params: {
            page,
            keyword,
            canContinuePublish: isAllowedRepublish,
          },
        },
        signal
      );
    },
    getCloseList: ({
      keyword = null,
      page = 1,
      isAllowedRepublish = null,
      signal,
    } = {}) => {
      return request(
        {
          method: "get",
          url: `/test.json`,
          params: {
            page,
            keyword,
            canContinuePublish: isAllowedRepublish,
          },
        },
        signal
      );
    },
  };