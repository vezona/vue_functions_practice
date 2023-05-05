import { ref } from 'vue';
const loading = ref(false);

const Authorization = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IlhsWnllRmtrcXg0MkRrZG5CMlRvUHciLCJ0eXAiOiJhdCtqd3QifQ.eyJuYmYiOjE2NjIwODY5MDYsImV4cCI6MTY2MjA5MDUwNiwiaXNzIjoiaHR0cHM6Ly9vcGlkLXQuZXZlcnRydXN0LmNvbS50dyIsImF1ZCI6ImhwX21lbWJlcl90b2tlbl9hcGkiLCJjbGllbnRfaWQiOiJocF9tZW1iZXJfdG9rZW4iLCJzdWIiOiIyNzA0NzNiNC0yYTliLTRkMmEtYmEwNC1lZDc2MDBkZTE4NTAiLCJqdGkiOiJhYzJhZjg2YS0yZDBkLTQzM2YtOGQ2ZS0yZmJkM2RjNzM4NjQiLCJOYW1lIjoi5YmN56uv5ris6Kmm5YCf5pS5IiwiUGhvbmUiOiIwOTY2NjY4NjY4IiwiVXNlcklkIjoiMjcwNDczYjQtMmE5Yi00ZDJhLWJhMDQtZWQ3NjAwZGUxODUwIiwiR3JvdXAiOiJJbGxlZ2FsLExlZ2FsIiwicm9sZXMiOiLluqvlrZgv5YiK55m7LOacg-WToeS4reW_gyzpm7vlgrPntIDpjIQsTGVnYWwiLCJWZXJpZnlDb2RlIjoiQVZpWkk3N3lRTEdrZlJYVmdwdWQ5Mnc2VEFNeGRaTTYiLCJncmFudF90eXBlIjoiY2xpZW50X2NyZWRlbnRpYWxzIiwic2NvcGUiOlsiaHBfbWVtYmVyX3Rva2VuX2FwaSJdfQ.j9fUC8TZrrS0Kh7Wlg-1K_moDIsDjmOdyjQqlWPn6Cjtu5SLZAudt_TVeV3H2RAWhLsjZaCEkQZ0xmojT5unbQdiEp3mPQPCPgXIe-D7E8RrIPqZVvmRux5vw3qbtGPFoGQ3YkJDKTsiYOnh07a4fPx-0oXTo-ifgoV8T397aYVA2EHG82HDxTxjpmb0E7Ut4sGCfW3xyld1avgpKYdj-EfBFkKTq_VW9XIGMvWdRSb6-SJv4XNKxYlkak-6vxONs_resqWVVqOwlFTmOzeylZ4pS6nTBxZMbI1CdPm4ObvfXnf20EUereO6Ea5xQ5sPGcuyr8dBs_RFEHp8G4DKKg';
const url = '/api/ws/Image/AdaptedWebCasePicture'
const getUploadImgUrl = ({ img, imgList }) => {
  const file = new FormData();
  file.append('file', img);
  
  fetch(url, {
    method: 'POST',
    body: file,
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization':Authorization
    },
  })
  .then(res => res.json())
  .then(result => { 
    // 出現 ok 代表資料已寫入
    console.log(result);
    // imgList.push()
  });
    // return request({
    //   method: 'post',
    //   url: 'https://007-t.houseprice.tw/api/ws/Image/AdaptedWebCasePatternPicture',
    //   headers: {
    //     'Content-Type': 'multipart/form-data',
    //   },
    //   data: file,
    // })
    //   .then(res => {
    //     imgList.push(res.data.url);
    //     loading.value = false;
    //   })
    //   .catch(error => {
    //     showErrTxt.value = error.response.data.data;
    //     loading.value = false;
    //   });
  };

export const useAPIUpload = () => {

    const uploadImg = (e, list) => {
        const fileList = e.target.files;
        loading.value = true

        // 驗證與上傳圖片
    for (let file of fileList) {
        getUploadImgUrl({img: file, list });
      }
        
    }

    return {
        uploadImg,
        loading

    }
 }