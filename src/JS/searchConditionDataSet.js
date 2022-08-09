import { computed } from 'vue';

export const searchConditionDataSet = () => {
  // ref: http://007.houseprice.tw/swagger/index.html
  // 物件列表頁所有搜尋條件 WebCaseGroupList
  // http://007.houseprice.tw/api/ws/WebCaseGroupList

  const searchConditionCity = {
    // 縣市: string
    city: '',
    // 區域: array[string]
    districts: [],
  };

  const searchConditionMap = {
    selectedRegion: {
      bottomRight: {
        lat: 0,
        lon: 0,
      },
      topLeft: {
        lat: 0,
        lon: 0,
      },
    },
  };

  const searchConditionCommon = {
    // 關鍵字: string
    keyword: '',
    // 地址關鍵字: string (找地址)
    address: '',
    // 總建坪(起): number (找地址)
    minTotalPing: null,
    // 總建坪(訖): number (找地址)
    maxTotalPing: null,
    // 樓層(起): number (找地址)
    fromFloor: null,
    // 樓層(訖): number (找地址)
    toFloor: null,
    // 總價上限: number
    maxPrice: null,
    // 總價下限: number
    minPrice: null,
    // 單價上限: number
    maxUnitPrice: null,
    // 單價下限: number
    minUnitPrice: null,
    // 屋齡上限/屋齡(迄): number
    maxAge: null,
    // 屋齡下限/屋齡(起): number
    minAge: null,
    // 建坪上限: number (如果建坪上下線不是 null，只會查建坪)
    maxArea: null,
    // 建坪下限: number
    minArea: null,
    // 地坪上限: number
    maxLandArea: null,
    // 地坪下限: number
    minLandArea: null,
    // 房數上限: number
    maxRoom: null,
    // 房數下限: number
    minRoom: null,
    // 樓層上限/總樓層(起): number
    maxFloor: null,
    // 樓層下限/總樓高(迄): number
    minFloor: null,
    // 是否限頂樓: boolean
    isFloorTop: null,
    // 總樓層下限: number
    minUpFloor: null,
    // 總樓層上限: number
    maxUpFloor: null,
    // 排序: number (enum)
    sortBy: null,
    // 降序排序: 0 => asc, 1 => desc
    order: null,
    // 用途: string
    use: '',
    // 型態: array[string]
    types: [],
    // 有無車位: boolean
    parking: '',
    // 漲價或降價 - 1：漲價 / 2：降價
    priceState: '',
    // 上下架狀態: On: 上架, Off: 下架, First: 初次上架, Today: 今日上架
    publishState: '',
    // 是否為屋主自售: boolean
    isSoldByOwner: '',
    // 賣家數: 0, 1, 2
    sellerCount: '',
    // 資料刊登網站: string
    caseFroms: null,
    // 那些店在賣: string
    housingAgency: null,
    // 頁數: number
    page: 1,
  };

  return {
    searchConditionCity,
    searchConditionMap,
    searchConditionCommon
  };
};
