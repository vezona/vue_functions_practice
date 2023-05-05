
import { ref } from 'vue';

export const useUpload = () => { 
    const loading = ref(false)

    // const readerFile = (file, list) => {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(file);
    //     reader.onload = e => list.push(e.target.result);
    //   };

    const uploadImg = (e, list) => {
        const fileList = e.target.files;
        loading.value = true
       
        for (let file of fileList) {
            list.push({name:file.name, loading:true, file:null})
            let i = 1;
            if (file.name === 'house.JPG') i = 3;
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = e => {
                setTimeout(() => {
                    list.forEach(item => {
                        if (item.name === file.name) {
                            item.loading = false;
                            item.file = e.target.result
                        }
                    })
                    // list.push(e.target.result)
                    loading.value = false
                },1000*i)
                
            }
        }
        e.target.value = null
    }



    return {
        uploadImg,
        loading,
    }
}


    


    