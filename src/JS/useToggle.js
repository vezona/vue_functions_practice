import { ref } from 'vue';

export default () => {
  const currentSelect = ref('');
  let wrapper = null;

  const toggleList = (event, val, container) => {
    wrapper = container;
    currentSelect.value = currentSelect.value === val ? '' : val;
    console.log('currentSelect', currentSelect.value);
    window.addEventListener('click', clickHandler);
  };

  const clickHandler = e => {
    // console.log('target', e.target);
    // console.log('currentTarget', e.currentTarget);
    // console.log('wrapper', wrapper);
    console.log('contains', wrapper.contains(e.target));
    if (currentSelect.value !== '' && !wrapper.contains(e.target)) {
      closeList();
    }
  };

  const closeList = () => {
    currentSelect.value = '';
    console.log('close', currentSelect.value);
    window.removeEventListener('click', clickHandler);
  };

  return {
    currentSelect,
    toggleList,
  };
};
