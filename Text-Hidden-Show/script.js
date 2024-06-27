document.addEventListener("DOMContentLoaded", () => {
    const textContainer = document.getElementById("text-container");
    const text = "Hello World!";
    let delay = 0;

    // Split the text into individual characters and wrap them in span elements
    text.split("").forEach(char => {

        const span = document.createElement("span");
        span.innerHTML = (char == ' ') ? '&nbsp;' : char;
        span.className = "letter";
        textContainer.appendChild(span);
    });

    // Apply the animation
    const letters = document.querySelectorAll(".letter");
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.opacity = 1;
            letter.style.transition = "opacity 0.5s ease";
        }, delay);
        delay += 200; // Adjust this value to control the speed of revealing letters
    });
});
