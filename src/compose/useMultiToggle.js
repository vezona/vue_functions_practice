import { ref } from 'vue';

export default () => {
  const currentSelect = ref('');
  let wrapper = null;

  const multiToggleList = (event, val) => {
    wrapper = event.target;

    if (currentSelect.value === val) {
      closeList();
    } else {
      currentSelect.value = val;
      window.addEventListener('click', clickHandler);
    }
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
    multiToggleList,
  };
};
