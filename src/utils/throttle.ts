export const throttle = (func: any, delay: any) => {
    let timeoutId: any;
    let lastExecutedTime = 0;

    return (...args: any) => {
        const currentTime = Date.now();

        if (currentTime - lastExecutedTime > delay) {
            func.apply(null, args);
            lastExecutedTime = currentTime;
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(null, args);
                lastExecutedTime = Date.now();
            }, delay);
        }
    };
};