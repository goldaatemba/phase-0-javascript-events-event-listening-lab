function addingEventListener() {
    // Select the button element by its ID
    const input = document.getElementById('button');
    
    // Define a function to handle the click event
    function clickAlert() {
        console.log('I was clicked!'); // Log message instead of alert
    }
    
    // Attach the event listener to the button
    input.addEventListener('click', clickAlert);
}

// Call the function to activate the event listener
addingEventListener();
