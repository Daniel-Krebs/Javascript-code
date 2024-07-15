function simulateClick(element) {
    var event = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true
    });
    element.dispatchEvent(event);
}

var designTab = document.querySelector('[aria-label="Design"]'); 
if (designTab) {
    simulateClick(designTab);
    console.log("Clicked on the Design tab.");

    
    setTimeout(() => {
        var designTheme = document.querySelector('[aria-label="Your Theme Name"]'); 
        if (designTheme) {
            simulateClick(designTheme);
            console.log("Selected the design theme.");
        } else {
            console.error("Design theme not found.");
        }
    }, 1000); // Adjust timeout as necessary for UI update
} else {
    console.error("Design tab not found.");
}
