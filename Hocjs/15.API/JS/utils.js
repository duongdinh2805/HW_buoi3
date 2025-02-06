export const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    clearInterval(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
