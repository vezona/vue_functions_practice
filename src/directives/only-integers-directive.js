const numberTest = num => /^[\d\-]/.test(num);

const keydownHandler = e => {
  if (!numberTest(e.key) && e.key.length === 1) {
    e.preventDefault();
  }
};

const clickHandler = e => {
  if (!numberTest(e.target.value)) {
    e.preventDefault();
    e.target.value = null;
  }
};

export default {
  mounted(el, binding) {
    el.addEventListener('keydown', keydownHandler);
    el.addEventListener('click', clickHandler);
  },
  beforeUnmount(el, binding) {
    el.removeEventListener('keydown', keydownHandler);
    el.removeEventListener('click', clickHandler);
  },
};
