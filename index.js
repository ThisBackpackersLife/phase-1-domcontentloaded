// Your code goes here
// set up DOMContentLoaded event listener. Use the event's callback function to target the paragraph element with id="text" and replace the text with "This is really cool!"

document.addEventListener("DOMContentLoaded", () => {
    const string = document.querySelector("#text")
    string.textContent = "This is really cool!"
});

