setTimeout(() => {
    let optionButton = document.querySelector('button[data-unique-id="Ribbon-InsertSlideSplit"]');  
    if (optionButton) {
        optionButton.click();
    } else {
        console.error('Option button not found');
    }
}, 1000);
