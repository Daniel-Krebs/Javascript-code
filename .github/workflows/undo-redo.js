function waitForAndClick(selector) {
    let intervalId = setInterval(() => {
       
        let optionButton = document.querySelector(selector);

       
        if (optionButton) {
          
            optionButton.click();
          
            clearInterval(intervalId);
        } else {
            console.log('Waiting for the option button...');
        }
    }, 500);
}


waitForAndClick('button[data-unique-id="Ribbon-UndoRedo"]');
