import { ref } from 'vue';

export default () => {
  const currentSelect = ref('');
  let wrapper = null;

  const toggleList = (event, val, container) => {
    wrapper = event.target;
    currentSelect.value = currentSelect.value === val ? '' : val;
    window.addEventListener('click', clickHandler);
  };

  const clickHandler = e => {
    if (currentSelect.value !== '' && !wrapper.contains(e.target)) {
      closeList();
    }
  };

  const closeList = () => {
    currentSelect.value = '';
    window.removeEventListener('click', clickHandler);
  };

  return {
    currentSelect,
    toggleList,
  };
};
