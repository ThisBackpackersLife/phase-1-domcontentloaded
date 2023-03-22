// Your code goes here
// set up DOMContentLoaded event listener. Use the event's callback function to target the paragraph element with id="text" and replace the text with "This is really cool!"
document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("text");
    text.textContent = "This is really cool!";
});