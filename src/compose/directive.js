import {ref, reactive} from 'vue'

export const scrollToHere = ref({
    el_1: null,
    el_2: null,
    el_3: null,
  }) 
  export  const updateElement=(key, element)=>{
    scrollToHere.value[key]=element
    // console.log(scrollToHere.value);

  }

export  const scroll=()=>{
    console.log(scrollToHere.value);
    scrollToHere.value.el_1.scrollIntoView({ behavior: 'smooth' });
}