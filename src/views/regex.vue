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
            // 是否為小於1的浮點數
            const floatingRegEx = /^0(\.)(\d*)/;
            
            const isFloat = floatingRegEx.test(float)
            if(isFloat){
                // 取得小數點以後數字
                const data = float.toString().match(/(?<=\.)(\S*)/)[0];
                if(data.length<2){
                    return +(data.padEnd('2', 0))
                } else if (data.length === 2){
                    return +data
                } else {
                    return parseFloat(data.slice(0, 2) +'.'+data.slice(2))
                }

            } else {
                return !float ? null: 100
            }
        };

        const percentToFloat = (percent)=>{
            //  (?=abc) 表示以abc結尾的前面的字串,但不包括abc

            // 是否帶有小數點
            const floatingRegEx = /(\.)/;

            const isFloat = floatingRegEx.test(percent)

            if(isFloat){
            // 取得小數點前後的數字
            const int = percent.toString().match(/(\S*)(?=\.)/)[0];
            const float = percent.toString().match(/(?<=\.)(\S*)/)[0];
            return int.length>2? 1 : parseFloat(`${int.padStart(4, '0.')}${float}`)

            } else {

                if(percent){
                    const str = percent.toString();
                    str.length>=3? 1: parseFloat(str.padStart(4, '0.'))
                }else{
                    return null
                }
                
            }
        };

        // const num = floatToPercent(NaN);
        const num =  percentToFloat();


        console.log(num);

        return {

        }
    }

}
</script>

<style>

</style>