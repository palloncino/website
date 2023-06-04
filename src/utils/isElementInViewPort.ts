export const isElementInViewport = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (!element) {
        console.log('Element not found')
        return false;
    }
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= window.innerHeight &&
        rect.right <= window.innerWidth
    );
};
