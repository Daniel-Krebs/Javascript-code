function addNewSlide() {
    var newSlideButton = document.querySelector("[aria-label='New Slide']");
    if (newSlideButton) {
        newSlideButton.click();
        return true;
    }
    return false;
}

return addNewSlide();
