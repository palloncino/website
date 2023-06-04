// debounce(handleScroll, 100)
export const debounce = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout | null;
  let isFirstEvent = true;
  
  return (...args: any[]) => {
    clearTimeout(timeoutId as NodeJS.Timeout);
    
    if (isFirstEvent) {
      func.apply(null, args);
      isFirstEvent = false;
    } else {
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    }
  };
};