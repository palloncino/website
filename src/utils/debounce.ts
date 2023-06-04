export const debounce = (func: any, delay: number) => {
  console.log(2)
  let timeoutId: NodeJS.Timeout | null;
  return (...args: any[]) => {
    console.log(3)
    clearTimeout(timeoutId as NodeJS.Timeout);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};