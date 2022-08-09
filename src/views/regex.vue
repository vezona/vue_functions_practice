<template>
  <div></div>
</template>

<script>
import {ref} from 'vue';
export default {
    setup(){
        //  /S*表示多個字串
        //  (?=) 往前查
        // (?<=) 往後查

        const floatToPercent = (float)=>{
            // 是否為整數
            const InitRegEx = /^0(\.)(\d*)/;
            
            const isFloat = InitRegEx.test(float)
            if(isFloat){
                // 取得小數點以後數字
            const data = float.toString().match(/(?<=\.)(\S*)/)[0]
            data.replace(/(?<=.)(?!$)/, ".")
            console.log(data);
            

            } else {
                !float ? null: 100
            }



            
            

        };

        

        

        const percentToFloat = (float)=>{
            //  (?=abc) 表示以abc結尾的前面的字串,但不包括abc
            // 取得小數點以前數字
            const test = float.toString().match(/(\S*)(?=\.)/g)
            console.log(test);
            

        };

        floatToPercent(0.2993473);
        // percentToFloat(39.3);

        return {

        }
    }

}
</script>

<style>

</style>