const checkPattern = ({ pattern, noticeTarget, errorMsg }) => {
    return (e) => {
      const val = e.currentTarget.value;
      const el = document.querySelector(noticeTarget);
  
      // check
      if (!pattern.test(val)) {
        el.innerText = errorMsg;
      } else {
        el.innerText = '';
      }
    };
  };
  
  export default {
    mounted(el, binding, vnode, prevVnode) {
      const { value, modifiers } = binding;
      el.addEventListener('input', checkPattern(value));
    },
    beforeUnmount(el, binding, vnode, prevVnode) {
      const { value, modifiers } = binding;
  
      el.removeEventListener('input', checkPattern(value));
    },
  };


// export default {
//     mounted(el, binding) {
//         const { value, modifiers } = binding;
//         el.addEventListener('blur', () => {
//             console.log(el.value)
//           });
        
//     },
//     // updated(el, binding, vnode, prevVnode) {
//     //     console.log('update', el, binding);
//     //     el.setAttribute('error', true)
//     // },
// }