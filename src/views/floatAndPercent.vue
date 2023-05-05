<template>
  
</template>

<script>
export default {
    setup(){
        const num = 1;


    // 乘回整數後除回去
    // const floatingToPercent = (float)=>{
    //     // 只有 1e-7 會失敗
    //     if(float && float<1){
    //         const  digital = float.toString().match(/(?<=\.)(\S*)/)[0].length;
    //         const multipleNum = Math.pow(10, digital+2)
    //         const dividedNum =  Math.pow(10, digital)
    //         return (parseInt(float*multipleNum))/dividedNum;
            
    //     } else {
    //         return float? 100: null
    //     }
    // }

    // 不運算
    // const floatingToPercent = floating => {
    //     if(Number(floating) <= 1 && Number(floating) > 0) {
    //         if(String(floating).split('.').length > 2) { return null; }
    //         const str = (floating + '00').replace(/\.(\d{2})/, '$1.');
    //         const arr = str.split('.');
    //         arr[1] = (arr[1] || '').replace(/0+$/, '');
    //         return arr[1] ? parseFloat([Number(arr[0]), arr[1]].join('.')) : Number(arr[0]);
    //     } else {
    //         return null;
    //     }
    // }

    // toPrecise 
    const floatingToPercent = (floating) => {
        if(floating>= 0 && floating < 1){
            console.log(parseFloat((floating * 100)));
            return parseFloat((floating * 100).toPrecision(10))
        } else {
            return floating === 1? 100: null
        }
    }

    // console.log(floatingToPercent(0.393));


    const percentToFloating = (percent)=>{
        if(percent && percent<100){
            const isFloat = percent.toString().includes('.')
            if(isFloat){
                const digital = percent.toString().match(/(?<=\.)(\S*)/)[0].length;
                const multipleNum = Math.pow(10, digital);
                const dividedNum = Math.pow(10, digital+ 2);
                return (percent*multipleNum)/dividedNum
            }else {
                return percent/100
            }
        } else {
            return percent===100? 1: null
        }
    }

    // console.log(percentToFloating(19334));
        


        return {

        }

    }

}
</script>

<style>

</style>